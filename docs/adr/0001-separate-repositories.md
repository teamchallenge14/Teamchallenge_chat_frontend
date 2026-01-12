# ADR-0001: Separate Frontend and Backend Repositories

Date: 2025-01-03  
Status: Accepted

## Context

The project consists of a React frontend and a NestJS backend developed in parallel.
The team needed a clear separation of responsibilities, independent deployment workflows,
and the ability to scale frontend and backend development independently.

## Decision

We decided to maintain the frontend and backend in separate Git repositories.

## Consequences

- **Positive:**
  - Frontend and backend can be developed, versioned, and deployed independently.
  - Clear ownership and responsibility boundaries.
  - CI/CD pipelines are simpler and faster for each part.
- **Negative:**
  - Requires well-defined API contracts and documentation (OpenAPI/Swagger) to stay in sync.
  - Integration testing requires setting up both repositories locally.
