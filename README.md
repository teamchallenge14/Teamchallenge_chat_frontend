````markdown
# Real-Time Chat Application — Team Challenge

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-38BDF8?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Architecture-FSD-green" />
  <img src="https://img.shields.io/badge/UI-Shadcn-black" />
  <img src="https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel" />
</p>

This repository contains the **Frontend** source code for a real-time chat application developed as part of the Team Challenge initiative.
The goal is to provide a modern, responsive messaging experience powered by a clean, scalable architecture.

---

## Why This Project Is Valuable for Recruiters

This project highlights skills that are directly applicable in modern frontend and full-stack roles:

- **Feature-Sliced Architecture (FSD):** Uses a domain-driven code structure (`app`, `features`, `entities`) — a signal of long-term thinking and maintainable design.
- **Real-Time Functionality:** Demonstrates ability to work with WebSockets and event-driven UI updates.
- **TypeScript-Driven:** Shows comfort with strict typing, interfaces, and safe API contracts.
- **Modern UI/UX:** Implementation of **Shadcn/UI**, Tailwind CSS, and accessible design patterns.
- **Engineering Culture:** Configuring environment variables, proxies, aliases, and clean Git flow.

---

## Features

### Core Functionality (MVP)

- ✅ **Real-time messaging** using WebSockets
- ✅ **Clean UI** with Tailwind & Shadcn
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
| Project Init & FSD Structure     | 🟢 **Done**        |
| UI Kit Setup (Shadcn + Tailwind) | 🟢 **Done**        |
| WebSocket Connection             | 🟡 **In Progress** |
| Auth / User Logic                | 🟡 **In Progress** |
| Chat Room Interface              | 🔜 **Planned**     |

---

## 🛠 Technology Stack

| Category         | Technology          | Purpose                                        |
| :--------------- | :------------------ | :--------------------------------------------- |
| **Framework**    | **React 18** + Vite | High-performance rendering & tooling.          |
| **Language**     | **TypeScript**      | Type safety & scalability.                     |
| **Architecture** | **FSD**             | "Feature-Sliced Design" for folder structure.  |
| **Styling**      | **Tailwind CSS**    | Utility-first styling.                         |
| **Components**   | **Shadcn/UI**       | Accessible, re-usable component library.       |
| **State**        | **Zustand**         | (Planned) Lightweight global state management. |
| **Validation**   | **Zod**             | Schema validation.                             |

---

## Architecture Overview (FSD)

We strictly follow **Feature-Sliced Design**. The codebase is organized by layers:

```text
src/
├── app/          # Global entry (styles, providers, router)
├── pages/        # Route components (composition of widgets)
├── widgets/      # Big standalone blocks (Sidebar, ChatWindow)
├── features/     # User interactions (Auth, SendMessage)
├── entities/     # Business logic (User, Message, Room)
├── shared/       # Reusable primitives (UI kit, API, Utils)
└── components/   # (Temporary) Base UI components from Shadcn
```
````

**Key aliases:**

- `@/shared`, `@/features`, `@/app` mapping to `src/*` folders.

---

## Getting Started

### Prerequisites

- Node.js (LTS)
- **pnpm** (recommended)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/teamchallenge14/Teamchallenge_chat_frontend.git
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

_(Note: Local development uses Vite Proxy to handle CORS automatically)._ 4. **Run Locally:**

```bash
pnpm dev

```

Open `http://localhost:5173` to view the app.

---

## Contribution Guidelines

- **Language:** English only (code & comments).
- **UI Components:** Use the CLI to add new Shadcn components:
  `pnpm dlx shadcn@latest add [component-name]`
- **Imports:** Always use absolute paths (e.g., `@/shared/lib/utils`).

---

## Localization

- 🇬🇧 **English** (This file)
- 🇺🇦 [Ukrainian version](https://www.google.com/search?q=./README.ua.md) (Coming soon)
