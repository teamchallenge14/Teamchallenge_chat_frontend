# ADR-005: SVG Icon Registry

### Status

- **Date:** 2026-03-24
- **Status:** Accepted

## Context

The application uses SVG icons across multiple features with varying requirements for size, color, and accessibility.

Current approaches such as manual imports or inline SVG usage lead to:

- Repetitive and inconsistent imports
- Lack of type safety
- Inconsistent naming conventions
- Increased maintenance overhead

### Accessibility Challenges

Handling SVG accessibility manually is error-prone and often results in:

- Missing or inconsistent ARIA attributes
- No clear distinction between decorative and meaningful icons
- Inconsistent screen reader behavior across the application

These issues become more pronounced as the number of icons and contributors grows.

---

## Decision Drivers

The decision is based on the following priorities:

- Consistent developer experience (DX)
- Type safety
- Accessibility by default
- Scalability and maintainability
- Reduction of repetitive boilerplate

---

## Decision

We will use SVGR + Vite import.meta.glob to create a centralized icon registry.

### Key aspects of the solution:

- All SVG files are stored in:

```

src/shared/assets/icons

```

- SVGs are converted into React components using SVGR

- Icons are automatically registered using:

```ts
import.meta.glob;
```

- Icons are consumed via a unified API:

  ```tsx
  <Icon name="ArrowLeft" />
  ```

- Icon names are inferred and typed using TypeScript, enabling full autocomplete and preventing invalid usage

---

## Accessibility Approach

Accessibility is enforced at the component level rather than relying on individual usage.

- Decorative icons are hidden from assistive technologies (`aria-hidden`)
- Meaningful icons can provide accessible labels via props (`aria-label`)
- Consistent behavior is guaranteed across the application

Example:

```tsx
<Icon name="Lock" aria-label="Private room" />
```

---

## Alternatives Considered

### 1. Manual SVG Imports

```tsx
import ArrowLeft from '@/assets/icons/arrow-left.svg';
```

- Repetitive and error-prone
- No centralized control
- Difficult to scale

---

### 2. Third-party Icon Libraries

- Limited control over design system consistency
- Additional dependencies
- May include unused icons (bundle impact)

---

### 3. Inline SVG in Components

```tsx
<svg>...</svg>
```

- Poor reusability
- Code duplication
- Hard to maintain and standardize

---

## Implementation Notes

- File naming convention: `kebab-case` (e.g., `arrow-left.svg`)
- Filenames are automatically transformed into `PascalCase` for usage
- SVGs should use `currentColor` to allow color control via CSS
- Direct SVG imports in feature code are discouraged
- The Icon component supports size presets (`sm`, `md`, `lg`) and custom pixel values

---

## Implications

### Advantages

- No manual imports required
- Type-safe icon usage
- Centralized and consistent API
- Improved developer experience
- Scales well with growing icon set

---

### Trade-offs

- All icons are eagerly bundled

This is acceptable for the current project size. If the number of icons grows significantly, a lazy-loading strategy may be introduced.

- Strong coupling to Vite and SVGR

Migration to another bundler would require adapting the registry mechanism.

---

## Future Considerations

- Consider switching to lazy-loaded icons using dynamic imports (import.meta.glob without eager) if the icon set grows significantly (>100 icons), to reduce initial bundle size
- Add linting rules to enforce icon usage patterns
- Validate SVG files (e.g., enforce `currentColor`)
- Group icons by domain if the registry grows significantly.

---
