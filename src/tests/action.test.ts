import { getCoverageTable, asMarkdownCode } from "../action"

test("throws invalid number", () => {
  expect(1).toBeTruthy()
})

test("wait 500 ms", async () => {
  expect(500).toBeGreaterThan(450)
})

describe("getCoverageTable()", () => {
  it("should return a markdown table without summary coverage", () => {
    const results = require("../../sample-results.json")
    expect(getCoverageTable(results, "/Volumes/Home/matt/dev/jest-github-action/", 0))
      .toMatchInlineSnapshot(`
      ":loop: **Code coverage**

      | Filename      | Statements | Branches | Functions |  Lines |
      | :------------ | ---------: | -------: | --------: | -----: |
      | src/action.ts |     19.27% |    1.61% |        0% | 19.75% |"
    `)
  })
  it("should return a markdown table with summary coverage", () => {
    const results = require("../../sample-results.json")
    expect(getCoverageTable(results, "/Volumes/Home/matt/dev/jest-github-action/", 1))
      .toMatchInlineSnapshot(`
      ":loop: **Code coverage**

      | Filename      | Statements | Branches | Functions |  Lines |
      | :------------ | ---------: | -------: | --------: | -----: |
      | src/action.ts |     19.27% |    1.61% |        0% | 19.75% |
      | All files     |     19.27% |    1.61% |        0% | 19.75% |"
    `)
  })
  it("should return a markdown table with only summary coverage", () => {
    const results = require("../../sample-results.json")
    expect(getCoverageTable(results, "/Volumes/Home/matt/dev/jest-github-action/", 2))
      .toMatchInlineSnapshot(`
      ":loop: **Code coverage**

      | Filename  | Statements | Branches | Functions |  Lines |
      | :-------- | ---------: | -------: | --------: | -----: |
      | All files |     19.27% |    1.61% |        0% | 19.75% |"
    `)
  })
})

describe("asMarkdownCode()", () => {
  it("should return a markdown formated code", () => {
    expect(asMarkdownCode("hello")).toStrictEqual("```\nhello\n```")
  })
})
