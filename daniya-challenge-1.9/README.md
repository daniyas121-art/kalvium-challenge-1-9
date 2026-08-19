# Daniya — Vibe Coding vs AI Pair Programming

## Project

Challenge #4 — Comparing Vibe Coding Tools and AI Pair Programming Assistants.

This repository contains two implementations of the same Task Manager:

* `vibe-version`
* `pair-version`

## Features

* Add a task
* Mark a task complete
* Filter: All / Active / Completed
* Clean responsive UI

## Live Deployments

* Vibe version: https://kalvium-challenge-1-9.vercel.app/
* Pair version: https://kalvium-challenge-1-9-1set.vercel.app/

## Tools Used

* Vibe tool: Not recoverable from available browser/Git history
* Pair tool: ChatGPT

## Comparison Table

| Dimension | Vibe Version | Pair Version | Verdict |
|---|---|---|---|
| Speed | Exact build time was not tracked | Exact build time was not tracked | No reliable speed comparison can be made from recorded evidence |
| Control | The implementation uses separate `Header`, `AddTask`, `FilterBar`, and `TaskList` components with a structured UI | The implementation uses a simpler single `App` component and was generated directly with ChatGPT | Pair version was simpler to modify directly; Vibe version had more component structure |
| Code Quality | 126 lines in `src/main.jsx`, with separate components, `useMemo`, task counts, and responsive styling | 89 lines in `src/main.jsx`, with the main functionality contained in one `App` component | Vibe version has more structure; Pair version is more compact |
| Explainability | The component-based structure makes the UI responsibilities clear | The smaller single-component implementation is straightforward to read and follow | Both are explainable, with different levels of structure |
| Editability | Changes can be made within separate UI components such as `Header`, `AddTask`, `FilterBar`, and `TaskList` | Most changes can be made directly inside the main `App` component | Pair version is simpler for small direct edits; Vibe version is better separated for component-level changes |

## When I Would Use Each Tool

**Vibe coding tool for:** quickly creating a complete UI structure — because the Vibe version produced a more componentized Task Manager with separate UI components, filter counts, and responsive styling.

**AI pair programming for:** making direct code changes and understanding the implementation — because the Pair version was generated directly with ChatGPT and kept the main functionality in a compact React component that could be edited and tested in VS Code.

## Evidence Log

### Vibe build

* Start time: Not tracked
* First working app time: Not tracked
* Files generated: 4 files in the initial Aug 17 repository commit — `index.html`, `package.json`, `src/main.jsx`, and `src/styles.css`
* Notable generated structure/behaviour: The Vibe version uses separate `Header`, `AddTask`, `FilterBar`, and `TaskList` components. It includes task counts for All / Active / Completed filters, uses `useMemo` for filtering, and includes responsive styling.

### Pair build

* Start time: Not tracked
* First working app time: Not tracked
* Suggestions accepted: Not tracked
* Suggestions rejected: Not tracked
* Manual decisions/overrides: Code was generated directly with ChatGPT and then used, tested, and deployed from VS Code.

## Video

Google Drive video: Not available

## Deployment

Both folders build successfully before submission.