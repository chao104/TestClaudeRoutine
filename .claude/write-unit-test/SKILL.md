---
name: write-unit-tests
description: Writes unit tests for code changed in the current PR diff. Use when a PR is labeled with `unit-test` and needs test coverage added.
---

# Writing unit tests for PR changes

## Scope

- 只針對這個 PR 的 diff（git diff origin/main...HEAD）裡新增或修改的 function 寫測試
- 不要動既有的測試檔案，除非是補完同一個被改的 function 的測試

## File

- 對 src 資料夾內的檔案撰寫單元測試時，預設放在 `test/unit/<relative-path>/<filename>.spec.js`
- 若存在 `test/unit/<relative-path>`，檢查是否有現有的 spec檔案，若有則避免重新建立
- 若不存在，可以自行建立資料夾

## Coverage targets

- Happy path
- 至少一個 edge case
- Error handling 分支（raise / return error）

## After writing tests

1. 跑一次測試確認都過
2. Commit message 格式：`test: add unit tests for <function/module>`
3. Push 到當前 branch
4. 在 PR 留言列出補了哪些測試檔
