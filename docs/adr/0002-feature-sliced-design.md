# ADR-0002: Adopt Feature-Sliced Design (FSD) Architecture

Date: 2026-01-03  
Status: Accepted

## Context

As the project grows, a simple file-based structure can lead to high coupling
and "spaghetti code".
The team needs a scalable architecture that clearly separates business logic,
UI, and application layers to facilitate teamwork and long-term maintainability.

## Decision

We will adopt the **Feature-Sliced Design (FSD)** methodology.

The layer hierarchy (bottom-up) is defined as:
`shared` → `entities` → `features` → `widgets` → `pages` → `app`.

## Consequences

- **Positive:**
  - Clear boundaries between modules and strict dependency rules (imports flow only one way).
  - Predictable project structure for new developers.
  - Low coupling allows independent refactoring of features.
- **Negative:**
  - Higher entry barrier for newcomers compared to classic MVC.
  - Increased file count due to splitting features into `model`, `ui`, and `lib` segments.
