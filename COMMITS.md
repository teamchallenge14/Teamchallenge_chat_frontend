# Commit Message Guidelines

This project uses Conventional Commits to keep history readable, automate changelogs when needed, and make reviews easier.

## Quick Rules

- Use the Conventional Commits format: `type(scope): subject`
- `type` must be lowercase (e.g. `feat`, `fix`, `docs`)
- `scope` is optional, but if used it must be lowercase (e.g. `chat`, `auth`, `ui`)
- Write the subject in imperative present tense (e.g. “add”, “fix”, “update”)
- Add the task reference at the end of the subject in the format `QTAL-123` (see exceptions below)
- Keep commits atomic: one commit should represent one logical change

---

## Format

```

type(scope?): subject QTAL-XXX?

body?

footer?

```

Only the header line is required. Body and footer are optional.

---

## Types

Use the standard set of commit types:

- `feat`: a new feature or user-facing change
- `fix`: a bug fix
- `docs`: documentation-only changes
- `style`: formatting changes (no logic changes)
- `refactor`: code change that neither fixes a bug nor adds a feature
- `perf`: performance improvement
- `test`: add or update tests
- `build`: build system or dependency changes
- `ci`: CI/CD configuration changes
- `chore`: maintenance tasks that don’t fit the above
- `revert`: revert a previous commit

Do not introduce custom types such as `ui`, `ux`, `security`, or `config`.
If you need this level of detail, use them as scopes instead.

---

## Scopes

Scopes help clarify which part of the codebase is affected.

Recommended scopes for this project:

Architecture layers:

- `app`, `pages`, `widgets`, `features`, `entities`, `shared`

Domain areas:

- `auth`, `chat`, `rooms`, `messages`

Tooling and maintenance:

- `config`, `deps`, `lint`, `build`, `ci`, `docs`

UI-related:

- `ui`, `styles`

Scope must be lowercase. For example:

- Correct: `feat(ui): ...`
- Incorrect: `feat(UI): ...`

---

## Task Reference (QTAL-XXX)

For most changes, include a task reference at the end of the commit subject.

Examples:

- `feat(chat): add typing indicator QTAL-214`
- `fix(auth): handle expired refresh token QTAL-198`
- `chore(config): update env setup QTAL-102`

### When a task reference can be omitted

You may omit `QTAL-XXX` for small, non-functional changes where creating a task is not justified, such as:

- typos and small documentation edits
- formatting-only changes
- small internal code cleanups that do not change how the application works

Examples:

- `docs(readme): fix typos`
- `style(ui): format button variants`
- `chore: update eslint ignore paths`

If a change affects application behavior, architecture, or user-facing functionality, it should have a task reference.

---

## Subject Guidelines

- Use imperative present tense: “add”, “fix”, “update”, “remove”
- Do not end the subject with a period
- Keep the header reasonably short (around 70 characters)
- If the header becomes long, move details into the body instead of extending the subject

Good:

- `feat(chat): add message replies QTAL-214`
- `fix(ui): align message bubble spacing QTAL-88`

Avoid:

- `feat: added message replies QTAL-214`
- `fix(chat): fixes the bug with messages QTAL-214`

---

## Body and Footer (Optional)

Use the body to explain context and non-obvious details. Start the body after a blank line.

Example:

```
feat(chat): add optimistic message sending QTAL-214
```

Implements optimistic UI updates for outgoing messages.
Adds retry behavior for failed deliveries.

Use the footer for additional metadata if needed (links, breaking changes, etc.). Most commits will not need a footer.

---

## Atomic Commits

Each commit should do one thing. Avoid mixing unrelated changes.

Good:

- one commit for adding a feature
- one commit for fixing a bug
- one commit for refactoring a specific module

Avoid:

- one commit that mixes unrelated changes (one commit = one reason for change)
