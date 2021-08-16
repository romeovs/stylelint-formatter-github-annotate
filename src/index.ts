import stylelint from "stylelint"

import { startGroup, endGroup } from "@actions/core"
import { issueCommand } from "@actions/core/lib/command"

function formatter(results: stylelint.LintResult[]): string {
	startGroup("Lint Annotations")

	let errorCount = 0
	for (const result of results) {
		for (const warning of result.warnings) {
			const { text, severity } = warning
			const properties = {
				file: result.source,
				line: warning.line,
				col: warning.column,
			}

			issueCommand(severity, properties, text)

			if (severity === "error") {
				errorCount++
			}
		}
	}

	endGroup()

	if (errorCount === 0) {
		return ""
	}

	return `There were ${errorCount} errors\n`
}

export = formatter
