# Vite React Tailwind TypeScript Template

A `Vite`-based `React` template with `TypeScript`, `TailwindCSS`, `Vitest`, `Storybook`, `ESLint`, and `Prettier` configured.

## Features

* **Framework**: [`React 19+`](https://react.dev/)
* **Build Tool**: [`Vite`](https://vitejs.dev/)
* **Language**: [`TypeScript`](https://www.typescriptlang.org/)
* **Styling**: [`TailwindCSS 4+`](https://tailwindcss.com/)
* **Routing**: [`React Router v6+`](https://reactrouter.com/)
* **State Management**: Ready for `React Context API`, custom hooks. Includes [`ahooks`](https://ahooks.js.org/) for utility hooks.
* **Testing**:
  * [`Vitest`](https://vitest.dev/) for unit/integration tests.
  * [`React Testing Library`](https://testing-library.com/docs/react-testing-library/intro/) for component testing.
* **Component Development & Documentation**: [`Storybook`](https://storybook.js.org/)
* **Linting**: [`ESLint`](https://eslint.org/)
* **Formatting**: [`Prettier`](https://prettier.io/) (integrated with `ESLint`)
* **Path Aliases**: `@/*` configured for `src/*`
* **Environment Variables**: Via `.env` files (see `src/vite-env.d.ts`)

## Getting Started

### Prerequisites

* [`Node.js`](https://nodejs.org/) (LTS version recommended, e.g., `v18`, `v20+`)
* [`pnpm`](https://pnpm.io/) (`v8+` recommended)

### Installation & Setup

1. **Clone or download the template:**

   ```bash
   # If you plan to host this on GitHub and use it as a template repository:
   # 1. Create a new repository on GitHub using this template.
   # 2. Clone your new repository:
   # git clone https://github.com/YOUR_USERNAME/YOUR_NEW_REPOSITORY.git
   # cd YOUR_NEW_REPOSITORY

   # Alternatively, for local use or direct cloning:
   # git clone https://github.com/YOUR_TEMPLATE_REPO_URL.git project-name
   # cd project-name
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Development Server:**

   To start the development server:

   ```bash
   pnpm dev
   ```

   This will typically open the application at `http://localhost:5173`.

## Available Scripts

In the project directory, you can run the following commands:

* `pnpm dev`: Runs the app in development mode with HMR.
* `pnpm build`: Builds the app for production to the `dist` folder. It also runs `tsc -b` for type checking before building.
* `pnpm lint`: Lints the project files using `ESLint`.
* `pnpm preview`: Serves the production build locally for preview.
* `pnpm test`: Runs tests once using `Vitest`.
* `pnpm test:ui`: Runs tests with the `Vitest UI`.
* `pnpm storybook`: Starts `Storybook` for component development and viewing.
* `pnpm build-storybook`: Builds `Storybook` as a static web application.

## Project Structure

The project follows a feature-sliced and domain-driven approach. Key directories include:

```text
src/
├── app/            # Application core: config, setup, global providers, main router
├── pages/          # Page-level components (top-level components for routes)
├── widgets/        # (Optional) Complex UI modules
├── features/       # Self-contained business feature modules
├── entities/       # (Optional) Business entities
└── shared/         # Globally shared modules (UI, utilities, config, hooks)
    ├── assets/
    ├── components/ # Generic, reusable UI components (e.g., Layout.tsx)
    ├── hooks/
    ├── lib/
    └── types/
```

Refer to `copilot-instructions.md` (if included in your project based on this template) or the project's internal documentation for more detailed structure guidelines.

## Key Configurations

* **`Vite`**: Configuration is in `vite.config.ts`.
* **`TypeScript`**: Configuration is in `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`. Path alias `@/*` points to `src/`.
* **`TailwindCSS`**: Configuration is in `tailwind.config.js`. Base styles and `Tailwind` directives are in `src/app/styles/index.css`.
* **`Vitest`**: Configuration is within `vite.config.ts` under the `test` property. Global setup for tests can be found in `.storybook/vitest.setup.ts`.
* **`Storybook`**: Configuration is in the `.storybook` directory.
* **`ESLint`**: Configuration is in `eslint.config.js`.
* **`VS Code` Settings**: Recommended settings for this project (e.g., to disable `Python` test discovery) are in `.vscode/settings.json`.

## Environment Variables

Create a `.env` file in the root of the project to manage environment variables. Example:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=My Awesome App
```

Access these in your application code using `import.meta.env.VITE_VARIABLE_NAME`.
Type definitions for environment variables can be added to `src/vite-env.d.ts`.

## License

This project template is licensed under the [`MIT License`](LICENSE.md). Please replace or update the `LICENSE.md` file according to your needs if you use this template for your own project.
