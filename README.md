# Jest Github Action

This repo is a fork of [jest-github-action](https://github.com/mattallty/jest-github-action) with extended features:

- Add a flag `calc-summary` to calculate summary coverage.
  - set to `true`: will calculate both summary coverage and separate files' coverage;
  - set to `false`: default setting, will not add summary coverage to pr comment;
  - set to `only`: will only show summary coverage.


As forked repo of the origin repo seems like cannot be published as an action in marketplace

## Usage

Add flag `calc-summary` to get summary coverage on coverage comment.

```yaml
uses: mattallty/jest-github-action@v1
env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
with:
  calc-summary: true
```
