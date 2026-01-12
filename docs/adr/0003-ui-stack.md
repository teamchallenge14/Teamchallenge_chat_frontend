# ADR-0003: UI Tech Stack (Tailwind CSS & Shadcn/UI)

Date: 2026-01-03  
Status: Accepted

## Context

We need to build a consistent, accessible, and responsive UI quickly.
Writing custom CSS modules for every component is time-consuming
and difficult to scale, often leading to style conflicts and visual
inconsistency across the team.

## Decision

We decided to use the following UI stack:

1. **Tailwind CSS** — for utility-first styling and centralized design system tokens.
2. **Shadcn/UI** — as a base component library (built on Radix UI + Tailwind CSS).

## Consequences

- **Positive:**
  - Rapid development speed (copy-paste components strategy).
  - Full control over component code (unlike MUI or AntD, Shadcn lives in our repo).
  - Consistent design system enforced via `tailwind.config.js`.
- **Negative:**
  - "Markup pollution" due to long utility class strings
    (mitigated by component extraction and composition).
