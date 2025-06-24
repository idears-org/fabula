# fabula: Story Visualization & Analysis Platform for Writers

fabula is a tool designed to help writers visualize, analyze, and optimize the structure of their stories. By combining powerful visualization tools and natural language processing (NLP), fabula empowers creators to manage complex narratives, track character arcs, and gain deep insights into their work.

## Who is fabula for?

fabula is built primarily for **writers and creators** of long-form fiction, but also offers value for readers and academic researchers. The initial focus is on serving writers who need to:

- Track and manage characters, relationships, and plotlines in complex stories
- Visualize story structure, character arcs, and narrative flow
- Avoid inconsistencies and forgotten plot points
- Analyze emotional tone and thematic patterns

## Key Features

- **Character Network Graph**: Visualize relationships between characters with an interactive, dynamic force-directed graph. Node size reflects importance or screen time; edge color/style indicates relationship type (e.g., ally, enemy).
- **Character Arc Chart**: Track custom metrics (e.g., power, morality, happiness) for each character over the course of the story.
- **Screen Time Statistics**: See which characters dominate the narrative, by chapter or overall.
- **Story Timeline**: Explore a horizontal, scrollable timeline of key events, with support for multi-threaded narratives.
- **Scene Flowchart**: Visualize scene-to-scene transitions and narrative structure, ideal for both linear and non-linear stories.
- **Sentiment Arc**: Analyze the emotional landscape of your story using NLP-powered sentiment analysis.
- **Interactive Map**: Mark locations on a custom map, track character movements, and visualize setting-based events.
- **Location Flow Diagram**: See how characters or groups move between locations throughout the story.
- **Theme & Motif Visualization**: Generate word clouds and concept maps to reveal core themes and recurring motifs.
- **Manual & Automated Data Input**: Start by manually entering story elements, then import text for automatic entity recognition, relationship extraction, and sentiment analysis (NLP-powered).

## Technology Stack

- **Frontend**: React 18+, TypeScript, Vite, TailwindCSS, ahooks, React Router v6
- **Visualization**: D3.js, ECharts, or similar libraries (planned)
- **Testing**: Vitest, React Testing Library, Storybook
- **Linting/Formatting**: ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js (LTS recommended, e.g., v18, v20+)
- pnpm (v8+ recommended)

### Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/idears-org/fabula.git
   cd fabula
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the development server:**

   ```bash
   pnpm dev
   ```

   The app will open at http://localhost:5173 by default.

## Available Scripts

- `pnpm dev`: Run the app in development mode with HMR.
- `pnpm build`: Build the app for production and run type checks.
- `pnpm lint`: Lint the project files using ESLint.
- `pnpm preview`: Serve the production build locally for preview.
- `pnpm test`: Run tests once using Vitest.
- `pnpm test:ui`: Run tests with the Vitest UI.
- `pnpm storybook`: Start Storybook for component development and viewing.
- `pnpm build-storybook`: Build Storybook as a static web application.

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

Refer to `copilot-instructions.md` or the internal documentation for detailed structure guidelines.

## Key Configurations

- **Vite**: Configuration in `vite.config.ts`.
- **TypeScript**: Configuration in `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`. Path alias `@/*` points to `src/`.
- **TailwindCSS**: Configuration in `tailwind.config.js`. Base styles and Tailwind directives in `src/app/styles/index.css`.
- **Vitest**: Configuration in `vite.config.ts` under the `test` property. Global test setup in `.storybook/vitest.setup.ts`.
- **Storybook**: Configuration in the `.storybook` directory.
- **ESLint**: Configuration in `eslint.config.js`.
- **VS Code Settings**: Recommended settings in `.vscode/settings.json`.

## Environment Variables

Create a `.env` file in the root of the project to manage environment variables. Example:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=fabula
```

Access these in your application code using `import.meta.env.VITE_VARIABLE_NAME`.
Type definitions for environment variables can be added to `src/vite-env.d.ts`.

## License

This project is licensed under the [WTFPL](LICENSE).

Note: The license above applies only to the code in this repository. It does not cover third-party dependencies, which are subject to their own respective licenses.
