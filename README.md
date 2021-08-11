# stylelint-formatter-github-annotate

A simple stylelint formatter that creates annotations in GitHub Actions.

## Installation

```
npm install -D stylelint-formatter-github-annotate
```
Or:
```
yarn add -D stylelint-formatter-github-annotate
```

## Usage

To use the annotation in a GitHub Action run, run stylelint with the `--custom-formatter` flag:
```
stylelint --custom-formatter=node_modules/stylelint-formatter-github-annotate files.js
```
