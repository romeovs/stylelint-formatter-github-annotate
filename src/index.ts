import stylelint from "stylelint"

import { startGroup, endGroup } from "@actions/core"
import { issueCommand } from "@actions/core/lib/command"

function formatter(results: stylelint.LintResult[]): "" {
	startGroup("Lint Annotations")

	for (const result of results) {
		for (const warning of result.warnings) {
			const { text, severity } = warning
			const properties = {
				file: result.source,
				line: warning.line,
				col: warning.column,
			}

			issueCommand(severity, properties, text)
		}
	}

	endGroup()

	return ""
}

export = formatter
