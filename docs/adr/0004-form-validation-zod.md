# ADR-0004: Form Validation with Zod & React Hook Form

Date: 2026-01-03  
Status: Accepted

## Context

Forms in the application require complex validation logic
(e.g., password complexity, dependent fields) that standard HTML5
attributes cannot handle.

We also need to ensure that TypeScript types exactly match the validation logic
to improve developer experience and reduce runtime errors.

## Decision

We decided to use **Zod** for schema-based validation,
integrated with **React Hook Form** for form state management.

## Consequences

- **Positive:**
  - Single source of truth: TypeScript types are inferred directly from validation schemas (`z.infer`).
  - Eliminates manual error handling boilerplate in components.
  - Rich API for complex validations (regex, refinements, transforms).
- **Negative:**
  - Slight increase in bundle size.
  - Learning curve for developers unfamiliar with schema-first validation.
