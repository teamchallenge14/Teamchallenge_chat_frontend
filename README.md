# QTalk — Real-Time Chat Application

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-38BDF8?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/UI-Shadcn-black" />
  <img src="https://img.shields.io/badge/Deploy-Render-black?logo=Render" />
</p>

**QTalk** (Quick Chat) is a modern messaging platform developed as part of the Team Challenge initiative.
The goal is to provide a responsive, real-time messaging experience powered by a clean, scalable architecture.

---

## Why This Project Is Valuable for Recruiters

This project highlights skills that are directly applicable in modern frontend and full-stack roles:

- **Real-Time Functionality:** Demonstrates ability to design and implement WebSocket-based, event-driven UI updates.
- **TypeScript-Driven:** Shows comfort with strict typing, interfaces, and safe API contracts.
- **Modern UI/UX:** Implementation of **Shadcn/UI**, Tailwind CSS, and accessible design patterns.
- **Engineering Culture:** Configuring environment variables, proxies, aliases, and clean Git flow.
- **Decision Documentation:** Architectural decisions are explicitly documented (ADR), demonstrating engineering reasoning beyond implementation.

---

## Features

### Core Functionality (MVP)

- ✅ **Clean UI** with Tailwind & Shadcn
- 🟡 **Real-time messaging** using WebSockets (In Progress)
- 🔄 **Persistent username** (stored locally)
- 🔄 **Auto-scroll** to latest message

### Roadmap (Planned)

- 🔜 **Typing indicators** (User is typing...)
- 🔜 **Multiple rooms** (Topics)
- 🔜 **Message replies** (Threads)

---

## Project Status

### Frontend Tasks

| Task                             | Status             |
| :------------------------------- | :----------------- |
| UI Kit Setup (Shadcn + Tailwind) | 🟢 **Done**        |
| WebSocket Connection             | 🟡 **In Progress** |
| Auth / User Logic                | 🟡 **In Progress** |
| Chat Room Interface              | 🔜 **Planned**     |

---

## Technology Stack

| Category       | Technology          | Purpose                                        |
| :------------- | :------------------ | :--------------------------------------------- |
| **Framework**  | **React 18** + Vite | High-performance rendering & tooling.          |
| **Language**   | **TypeScript**      | Type safety & scalability.                     |
| **Styling**    | **Tailwind CSS**    | Utility-first styling.                         |
| **Components** | **Shadcn/UI**       | Accessible, re-usable component library.       |
| **State**      | **Zustand**         | (Planned) Lightweight global state management. |
| **Validation** | **Zod**             | Schema validation.                             |

---

**Key aliases:**

- `@/shared`, `@/app` mapping to `src/*` folders.

## Architectural Decision Records (ADR)

Architectural principles and key technical decisions are documented
in the `/docs/adr` directory using Architecture Decision Records (ADR).

---

## Getting Started

### Prerequisites

- Node.js (LTS)
- **pnpm** (recommended)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/teamchallenge14/Teamchallenge_chat_frontend.git teamchallenge-chat-frontend
cd teamchallenge-chat-frontend
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Environment Setup:**
   Create a `.env` file in the root:

```env
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000
```

_(Note: Local development uses Vite Proxy to handle CORS automatically)._

4. **Run Locally:**

```bash
pnpm dev
```

Open `http://localhost:5173` to view the app.

---

## Code Quality Gates (Standard Established)

This project now enforces the following **Code Quality Gates**:

### Static Analysis & Type Safety

- **ESLint (Flat Config)** with strict rules enabled via `@typescript-eslint`
- Disallows unsafe patterns such as:
  - non-null assertions (`!`)
  - unused variables and parameters
  - unchecked side effects
- Ensures consistent and predictable code structure across the project

### Formatting Consistency

- **Prettier** is integrated with ESLint
- Formatting issues are treated as linting errors
- **Tailwind CSS class sorting** is enforced automatically via plugin
- Guarantees a uniform code style regardless of contributor

## How to Test

Reviewers can verify the setup by running the following commands:

1. Check for linting errors (should be clean):

```bash
pnpm lint
```

2. Check formatting:

```bash
pnpm format
```

---

## Contribution Guidelines

Please read our [Contributing Guide](CONTRIBUTING.md) for development standards and workflow.

---

## Localization

- 🇬🇧 **English** (This file)
- 🇺🇦 [Ukrainian version](./README.ua.md) (Coming soon)
