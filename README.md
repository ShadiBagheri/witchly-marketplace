# Witchly Marketplace

A responsive marketplace frontend built with **Next.js, React, and TypeScript**.

This project was developed as part of a frontend technical assessment. It focuses on reusable UI components, structured feature organization, responsive layouts, and maintainable frontend architecture.

**Repository:** [witchly-marketplace](https://github.com/ShadiBagheri/witchly-marketplace)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Application Pages](#application-pages)
- [Features and Architecture](#features-and-architecture)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Storybook](#storybook)
- [Screenshots](#screenshots)
- [UX/UI Review](#uxui-review)
- [Future Improvements](#future-improvements)

---

## Overview

Witchly Marketplace provides an interface for exploring marketplace content and discovering mystical services and practitioners.

The application is organized around reusable components and feature-specific modules to support maintainability and future development.

The main areas of the project include:

- Homepage
- Browse page
- User dashboard
- Shared layouts and navigation
- Reusable UI components

---

## Tech Stack

### Core

- **Next.js 16** – React framework and application routing
- **React 19** – Component-based UI development
- **TypeScript 5** – Static typing
- **Tailwind CSS 4** – Utility-first styling

### Data and Forms

- **TanStack React Query 5** – Asynchronous data and server-state management
- **React Hook Form** – Form state management
- **Zod** – Schema validation

### UI and Interaction

- **Radix UI** – Accessible UI primitives
- **Embla Carousel** – Carousel functionality
- **Sonner** – Toast notifications
- **next-themes** – Theme management
- **class-variance-authority** – Component variant management
- **clsx** and **tailwind-merge** – Conditional and merged CSS classes

### Development and Testing

- **Jest** – Unit testing
- **React Testing Library** – Component testing
- **Storybook 10** – Component development and documentation
- **ESLint** – Code linting
- **Prettier** – Code formatting
- **pnpm** – Package management

---

## Project Structure

The source code is organized into application routes, shared components, feature modules, hooks, layouts, and utilities.

```text
src/
├── app/
│   ├── (dashboard)/
│   │   └── user-dashboard/
│   │       └── page.tsx
│   ├── (home)/
│   │   ├── browse/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
│
├── assets/
│   └── icons/
│
├── components/
│   ├── feedback/
│   ├── layout/
│   │   ├── footer/
│   │   └── header/
│   ├── shared/
│   │   ├── icons/
│   │   ├── mobile-bottom-nav/
│   │   ├── nqvigation-link/
│   │   └── search-box/
│   └── ui/
│       ├── accordion/
│       ├── badge/
│       ├── button/
│       ├── card/
│       ├── carousel/
│       ├── label/
│       ├── navigation-menu/
│       ├── sheet/
│       ├── slider/
│       ├── switch/
│       ├── text-input/
│       └── typography/
│
├── config/
│   └── fonts/
│
├── features/
│   ├── home/
│   │   ├── api/
│   │   ├── hooks/
│   │   ├── index.tsx
│   │   └── types.d.ts
│   └── user-dashboard/
│       └── index.tsx
│
├── hooks/
│   └── use-favorite.ts
│
├── layouts/
│   ├── home-layout/
│   └── root-layout/
│
├── lib/
├── provider.tsx
├── styles/
├── types/
└── utils/
```

### Folder Responsibilities

| Directory            | Responsibility                                             |
| -------------------- | ---------------------------------------------------------- |
| `app/`               | Application routes and page entry points                   |
| `assets/`            | Static assets such as SVG icons                            |
| `components/layout/` | Shared header and footer components                        |
| `components/shared/` | Shared interface components                                |
| `components/ui/`     | Reusable UI primitives and components                      |
| `features/`          | Feature-specific components, API modules, hooks, and types |
| `hooks/`             | Shared custom React hooks                                  |
| `layouts/`           | Shared page layout components                              |
| `config/`            | Application configuration, including fonts                 |
| `styles/`            | Global and component-related styles                        |
| `types/`             | Shared TypeScript types                                    |
| `utils/`             | Utility functions                                          |

---

## Application Pages

The application currently includes the following route entry points:

| Page           | Route             |
| -------------- | ----------------- |
| Homepage       | `/`               |
| Browse         | `/browse`         |
| User Dashboard | `/user-dashboard` |

---

## Features and Architecture

### Reusable UI Components

The project includes reusable components such as buttons, badges, cards, carousels, navigation menus, sliders, sheet, switches, text inputs, and typography components.

### Shared Layouts and Navigation

Shared layout components include:

- Header
- Footer
- Mobile bottom navigation
- Navigation links
- Search box

### Home Feature Modules

The home feature contains separate API and hook modules, including:

- Trending Magic data module
- Trending Magic hook
- Item filtering hook
- URL parameters hook

### Favorites

A custom favorites hook is included in the shared hooks directory.

### Data and State Management

TanStack React Query is included for asynchronous data management. The application also includes a provider component for application-level providers.

---

## Getting Started

### Prerequisites

Make sure the following tools are installed:

- Node.js
- pnpm

### Installation

Clone the repository:

```bash
git clone https://github.com/ShadiBagheri/witchly-marketplace.git
```

Navigate to the project directory:

```bash
cd witchly-marketplace
```

Install dependencies:

```bash
pnpm install
```

### Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

---

## Available Scripts

| Command                     | Description                                |
| --------------------------- | ------------------------------------------ |
| `pnpm dev`                  | Starts the development server on port 3000 |
| `pnpm build`                | Creates a production build                 |
| `pnpm start`                | Starts the production server               |
| `pnpm lint`                 | Runs ESLint                                |
| `pnpm format`               | Formats JavaScript and TypeScript files    |
| `pnpm format:check`         | Checks code formatting                     |
| `pnpm test:unit`            | Runs Jest unit tests                       |
| `pnpm test:generate-output` | Generates Jest test result output          |
| `pnpm storybook`            | Starts Storybook on port 6006              |
| `pnpm build-storybook`      | Builds the Storybook application           |
| `pnpm serve-storybook`      | Serves the built Storybook                 |
| `pnpm generate:icons`       | Runs the icon generation script            |

---

## Testing

The project includes Jest and React Testing Library for unit and component testing.

Run tests with:

```bash
pnpm test:unit
```

---

## Code Quality

ESLint and Prettier are configured to support consistent code quality and formatting.

Run linting:

```bash
pnpm lint
```

Format source files:

```bash
pnpm format
```

Check formatting:

```bash
pnpm format:check
```

---

## Storybook

Storybook is included for developing and documenting UI components in isolation.

Start the Storybook development server:

```bash
pnpm storybook
```

Open [http://localhost:6006](http://localhost:6006).

Build Storybook:

```bash
pnpm build-storybook
```

---

## UX/UI Review

A UX/UI review of the original Witchly website was conducted as part of this assessment.

The report documents identified interface and usability issues, their impact on the user experience, and practical improvement recommendations.

[View UX/UI Review Report](./docs/ux-ui-review.md)

Supporting screenshots:

```text
screenshots/implementation/
```

---

## Future Improvements

Potential areas for future development include:

- Expand automated test coverage.
- Improve accessibility across application pages.
- Further optimize data fetching and rendering performance.
- Enhance responsive behavior across additional screen sizes.
- Improve documentation for reusable UI components.

---

## Project Information

**Project:** Witchly Marketplace
**Developer:** Shadi Bagheri
**Repository:** [GitHub Repository](https://github.com/ShadiBagheri/witchly-marketplace)

Developed as part of a frontend technical assessment.
