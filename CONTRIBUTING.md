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
- **Icons:** Use the centralized SVG icon registry via `<Icon />` (no direct SVG imports). See SVG Icon Registry section.

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

`md id="contributing-icons-final"`

## SVG Icon Registry

The project uses a **centralized SVG icon registry** to ensure type safety, consistency, and accessibility by default.  
All icons are automatically registered and exposed via the `<Icon />` component.

---

### Adding a New Icon

1. Place the SVG file in:

```
src/shared/assets/icons/
```

2. Use **kebab-case** for the filename:

```
arrow-left.svg
close-modal.svg
user-profile.svg
```

3. Ensure SVG uses `currentColor` for all `fill` and/or `stroke` to support styling via the Icon component.

```svg
fill="currentColor"
```

4. No additional configuration is required.
   The icon will be automatically registered via `import.meta.glob` and available in the `<Icon />` component.

---

### Usage

- Icon names are automatically derived from filenames in kebab-case and converted to PascalCase:
  - `arrow-left.svg` → `ArrowLeft`
  - `close-modal.svg` → `CloseModal`
  - `user-profile.svg` → `UserProfile`

```tsx
import { Icon } from '@/shared/ui/Icon';

// Decorative icon (hidden from screen readers)
<Icon name="ArrowLeft" className="text-slate-500" />

// Meaningful icon (accessible)
<Icon name="CloseModal" aria-label="Close modal" />
```

The color is controlled via the CSS `color` property (because all SVGs use `currentColor` inside).  
You can set the color in two ways:

- **Via Tailwind classes (recommended):**

```tsx id="tailwind-example"
<Icon name="Lock" className="text-red-500" />
<Icon name="Download" className="text-emerald-600" />
```

- **Via inline style (for hex, CSS variables, etc.):**

```tsx id="inline-style-example"
<Icon name="Lock" style={{ color: '#3b82f6' }} />
<Icon name="Lock" style={{ color: 'var(--accent-color)' }} />
```

**Important:** Tailwind `className` has higher priority than `style.color`.
If you pass both, the color from `className` will be used.

---

### Rules

- Do not import SVG files directly:

  ```tsx
  import ArrowLeft from '@/assets/icons/arrow-left.svg';
  ```

- Always use the `<Icon />` component

- Keep SVGs minimal and optimized (remove unnecessary metadata, groups, etc.)

---

### Accessibility (A11y) Guidelines

The `<Icon />` component is **accessible by default**.

### Decorative icons (default)

If the icon is purely visual and accompanied by text, use it without `aria-label`.
The component will automatically apply `aria-hidden="true"`.

```tsx
<button>
  <Icon name="Download" />
  Download PDF
</button>
```

---

### Meaningful icons

If the icon conveys meaning and has no visible text, provide an accessible label:

```tsx
<Icon name="Lock" aria-label="Private room" />
```

---

### Important

- Do not pass `aria-hidden` manually
- The component determines accessibility behavior based on the presence of `aria-label`

---

### Future Notes

- Subfolder support is not currently enabled
- If needed, it can be introduced via glob patterns (`**/*.svg`) in the registry

---

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
