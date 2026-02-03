# Contributing Guide

Welcome to the team! Here are the guidelines to help you get started and ensure consistent code quality across the project.

## Quick Rules

- **Package manager:** Use `pnpm` only (no npm / yarn).
- **Language:** English only (code, comments, commits, docs).
- **Imports:** Use absolute imports via `@/` (avoid deep relative paths).
- **Architecture:** Follow the FSD-inspired folder structure and boundaries.
- **Commit conventions:** Follow Conventional Commits and add `QTAL-XXX` when applicable.
- **Safety:** Do not use non-null assertions (`!`).
- **UI components:** Add shadcn/ui components via `pnpm dlx shadcn@latest add ...`.

## Project Setup

### Package Manager

We use **pnpm** strictly. Please do not use `npm` or `yarn` to avoid lockfile conflicts.

```bash
npm install -g pnpm
pnpm install
```

### Editor Configuration (VS Code)

This project comes with pre-configured VS Code settings (`.vscode/settings.json`).

- **Format on Save** is enabled.
- **ESLint Auto-fix** is enabled.

**Recommended Extensions:**

- **ESLint** (dbaeumer.vscode-eslint)
- **Prettier** (esbenp.prettier-vscode)
- **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)

_Please install these extensions to let the editor handle formatting automatically._

## Coding Standards

### 1. Import Aliases (`@`)

We use absolute imports via the `@` alias, which points to the `src` directory.
**Do not use** deep relative imports like `../../../components`.

**Correct:**

```tsx
import { Button } from '@/components/ui/button';
import { utils } from '@/shared/lib/utils';
```

**Incorrect:**

```tsx
import { Button } from '../../components/ui/button';
```

### 2. Type Imports

Use `import type` when importing interfaces or types.
This improves type clarity and enables better tree-shaking in modern bundlers.

**Correct:**

```tsx
import type { User } from '@/entities/user';
```

### 3. Strict Linting & TypeScript

- The project uses **TypeScript strict mode**.
- Avoid using `any`; prefer explicit and safe types.
- **Non-null assertions (`!`)** are forbidden (e.g., `document.getElementById('root')!`). Always use type guards or `if` checks.
- **Tailwind Classes:** Prettier will automatically sort your classes on save.

## Workflow

### Before Committing

Before committing, make sure your code is clean.

Formatting and linting are usually handled automatically via editor settings,
but you can always verify manually:

```bash
pnpm lint
pnpm format
```

### Git Conventions

Commit messages follow the **Conventional Commits** specification.

For detailed rules, examples, and task reference guidelines,
see [COMMITS.md](./COMMITS.md).

### Language Standards

- **English Only:** All code (variable names, functions, components), comments, documentation, and commit should be written in English.
- This ensures the codebase is accessible to international contributors and adheres to industry standards.
