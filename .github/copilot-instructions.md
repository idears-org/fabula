<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# GitHub Copilot Instructions for SPA (Single Page Application) project

## 1. General Principles & Communication

* **Language**: Please use **Chinese (Simplified)** for chat responses. For code generation, including inline comments and JSDoc, please use **English**. Technical terms, variable names, and function names should always be in English.
* **Tone**: Be concise, professional, and act as an expert pair programmer.
* **Role**: Assume you are an expert full-stack developer with strong experience in `React`, `TypeScript`, `Vite`, `TailwindCSS`, `Node.js`, and AI integration.
* **Clarity**: If a request is ambiguous, please ask for clarification before proceeding.
* **Completeness**: When asked to implement a feature or make a change, consider all related aspects:
  * Code implementation (`TypeScript`, `React` components, hooks, services).
  * Type definitions.
  * Unit/Integration tests (using `Vitest` and `React Testing Library`).
  * Updates to relevant documentation in the `docs/` directory (`PRD`, design, `UI/UX`).
  * Updates to `JSDoc` comments and any specific header comments (like in prompt files).
* **Proactive Suggestions**: Feel free to suggest improvements, optimizations, or point out potential issues based on these instructions and best practices.
* **Iterative Approach**: For complex tasks, propose a step-by-step plan. We will work iteratively.
* **Code Reusability**: Before generating any new code, first assess whether the goal can be achieved by enhancing the reusability of existing code or by utilizing shared modules.

## 2. Core Technologies & Project Stack

* **Framework**: `React 18+`
* **Language**: `TypeScript` (latest stable, with `strict: true` in `tsconfig.json`)
* **Build Tool**: `Vite`
* **Package Manager**: `pnpm` (strictly use `pnpm` for all package operations)
* **Styling**: `TailwindCSS`.
* **State Management**: `React Context API` for simple global state; local component state, custom hooks, and `ahooks` state hooks for feature-specific state. Major global state solutions like `Zustand`/`Jotai` will be discussed before adoption.
* **Routing**: `React Router v6`.
* **Testing**: `Vitest` for running tests, `React Testing Library` for component testing.
* **Linting**: `ESLint` (config in `eslint.config.js`).
* **Formatting**: `Prettier` (integrated with `ESLint`, or run separately).
* **AI Integration**: Custom AI provider system (details in `src/ai/`).

## 3. Directory Structure & File Organization

The project follows a feature-sliced and domain-driven approach. All source code is located in `src/`. When adding new files, place them in the most appropriate existing directory or suggest a new one if a logical grouping is missing. Test files (`*.test.ts(x)`) and Storybook files (`*.stories.ts(x)`) should be co-located with their corresponding source files.

```
src/
├── app/                  # Application core: config, setup, global providers, main router
│   ├── providers/        # Global context providers (Theme, Auth, Router, QueryClient)
│   │   └── theme-provider.tsx
│   ├── styles/           # Global styles (index.css, Tailwind base, CSS variables)
│   ├── App.tsx           # Root application component
│   ├── App.test.tsx      # Tests for App.tsx
│   ├── main.tsx          # Application entry point
│   └── AppRouter.tsx     # Main routing configuration
│
├── pages/                # Page-level components (top-level components for routes)
│   ├── ArticleEditorPage.tsx
│   ├── ArticleEditorPage.test.tsx
│   ├── ArticleEditorPage.stories.tsx
│   └── ...
│
├── widgets/              # (Optional) Complex UI modules composed of features/shared components
│   ├── ArticleOutlineWidget/
│   │   ├── index.tsx     # e.g., ArticleOutlineWidget.tsx
│   │   ├── ArticleOutlineWidget.test.tsx
│   │   └── ArticleOutlineWidget.stories.tsx
│   └── ...
│
├── features/             # Self-contained business feature modules
│   ├── article-submission/ # Example: Feature for submitting a new article
│   │   ├── components/     # UI components specific to this feature
│   │   │   ├── SubmissionForm.tsx
│   │   │   ├── SubmissionForm.test.tsx
│   │   │   └── SubmissionForm.stories.tsx
│   │   ├── hooks/          # React Hooks specific to this feature
│   │   │   └── use-submission-handling.ts
│   │   ├── services/       # API service calls for this feature
│   │   │   ├── submission.service.ts
│   │   │   └── submission.service.test.ts
│   │   ├── store/          # (Optional) State management for this feature (e.g., Zustand slice)
│   │   │   └── submission.store.ts
│   │   ├── types/          # TypeScript types specific to this feature
│   │   │   └── submission.types.ts
│   │   ├── utils/          # Utility functions specific to this feature
│   │   │   └── submission-validator.ts
│   │   └── index.ts        # Public API of the feature (exports)
│   │
│   ├── user-authentication/
│   │   └── ...             # Similar structure for user auth components, services, etc.
│   │
│   ├── ai-tools/           # AI-related functionalities
│   │   ├── components/     # Reusable AI-related UI components
│   │   ├── hooks/          # Hooks for interacting with AI services
│   │   ├── services/       # Services for AI model interaction & providers
│   │   │   ├── ai-generation.service.ts
│   │   │   └── providers/
│   │   │       └── deepseek-provider.ts
│   │   ├── prompts/        # AI prompt definitions (e.g., content-strategy-prompt.ts)
│   │   ├── loaders/        # Logic for loading prompts (e.g., prompt-loader.ts)
│   │   ├── types/          # AI-specific types (e.g., ai.types.ts, prompt.types.ts)
│   │   └── index.ts
│   └── ...
│
├── entities/             # (Optional, for fine-grained FSD) Business entities
│   ├── article/
│   │   ├── model/          # Data models, types, store selectors
│   │   ├── ui/             # UI components representing the entity (e.g., ArticleCard.tsx)
│   │   ├── api/            # API definitions related to the entity
│   │   └── index.ts
│   └── ...
│
└── shared/               # Globally shared modules (UI, utilities, config)
    ├── api/              # Base API client configuration
    ├── assets/           # Static assets (icons, images)
    ├── components/       # Generic, reusable UI components (Button, Modal)
    │   └── layouts/        # Global layout components (DashboardLayout.tsx)
    ├── config/           # Global application configuration
    ├── hooks/            # Globally reusable custom hooks
    ├── lib/              # Shared utility functions (date-utils, validation-utils)
    ├── styles/           # Shared style utilities (minimal, Tailwind preferred)
    └── types/            # Global TypeScript definitions
```

**Directory Explanations:**

* **`src/app/`**: Core application setup, including global providers (theme, authentication context), root component (`App.tsx`), entry point (`main.tsx`), global styles, and the main router configuration (`AppRouter.tsx`).
* **`src/pages/`**: Each file typically represents a unique page/view accessible via a route. These components orchestrate `widgets` and `features` to build the page. Example: `ArticleEditorPage.tsx` would compose various widgets and features related to article editing.
* **`src/widgets/`**: (Optional) Larger, self-contained UI blocks that might appear on multiple pages or represent a significant, distinct part of a page. They are composed of `features` and `shared/components`. Example: `ArticleOutlineWidget` could display an article's outline and be used within `ArticleEditorPage.tsx`.
* **`src/features/`**: Contains modules for specific business functionalities. Each feature is self-contained.
  * *Example: `src/features/article-submission/`*
    * `components/SubmissionForm.tsx`: The UI form for submitting an article.
    * `hooks/use-submission-handling.ts`: Logic for handling form state, validation, and submission process.
    * `services/submission.service.ts`: API calls to the backend for article submission.
    * `types/submission.types.ts`: TypeScript types like `ArticlePayload`, `SubmissionResponse`.
    * `SubmissionForm.test.tsx` and `SubmissionForm.stories.tsx` would be co-located.
* **`src/entities/`**: (Optional, for more granular FSD) Represents core business entities (e.g., `Article`, `User`). Contains their data models, UI representations (like `ArticleCard.tsx`), and related API definitions or selectors.
* **`src/shared/`**: Modules reusable across the entire application.
  * `components/`: Purely presentational, globally reusable UI components (e.g., `Button.tsx`, `Modal.tsx`).
  * `hooks/`: Globally applicable custom hooks (e.g., `use-local-storage.ts`).
  * `lib/` (or `utils/`): Global utility functions (e.g., `date-utils.ts`).
  * Other shared resources like API client setup, assets, global config, and global types.
* **`src/store/` or `src/context/`**: (As previously defined) For `React Context` providers and related hooks if not fitting into the `app/providers` or feature-specific stores.
* **`src/assets/`**: (As previously defined) Static assets like images, fonts.
* **`src/styles/`**: (As previously defined) Minimal global styles; `TailwindCSS` is preferred.
* **`types/`** (at project root or `src/types/`): (As previously defined) Global `TypeScript` type definitions or ambient module declarations not fitting elsewhere.

## 4. Naming Conventions

* **Directories**: `kebab-case` (e.g., `user-profile`, `auth-utils`).
* **File Names**:
  * **React Component Files (`.tsx`)**: `PascalCase.tsx` (e.g., `UserProfile.tsx`, `ArticleEditor.tsx`). The filename should match the main default exported component.
  * **Custom Hook Files (`.ts`)**: `use-kebab-case.ts` (e.g., `use-auth.ts`, `use-article-data.ts`). The exported hook function name should be `useCamelCase` (e.g., `useAuth`).
  * **Other TypeScript Files (`.ts`, `.tsx` non-component)** (utilities, services, type definitions, configs, etc.): `kebab-case.ts` (e.g., `api-client.ts`, `date-utils.ts`, `article-types.ts`).
* **React Components (identifiers in code)**: `PascalCase` (e.g., `function UserProfile() {}`, `<UserProfile />`).
* **Variables & Functions (identifiers in code, non-component, non-hook)**: `camelCase` (e.g., `const currentUser = ...`, `function fetchArticle() {}`).
* **Custom Hooks (identifiers in code)**: `useCamelCase` (e.g., `function useAuth() {}`).
* **Type Aliases & Interfaces (identifiers in code)**: `PascalCase` (e.g., `type Article = {}`, `interface UserProfile {}`).
* **Constants (identifiers in code)**: `UPPER_SNAKE_CASE` (e.g., `const API_BASE_URL = ...`).

## 5. Routing Conventions (Frontend)

* **Style**: Frontend routing should follow `RESTful` principles, focusing on resources.
* **Resource Naming**: Use plural nouns for resource collections in paths (e.g., `/articles`).
* **Path Structure**:
  * List/Collection: `/resource-name` (e.g., `/articles` for listing articles).
  * Create New: `/resource-name/new` (e.g., `/articles/new` for the new article page).
  * View Specific: `/resource-name/:resourceId` (e.g., `/articles/:articleId` for viewing a specific article).
  * Edit Specific: `/resource-name/:resourceId/edit` (e.g., `/articles/:articleId/edit` for editing a specific article).
  * Other Actions: `/resource-name/:resourceId/action` (e.g., `/articles/:articleId/preview`).
* **Parameters**: Use `camelCase` for route parameters (e.g., `:articleId`).
* **Clarity**: URLs should be self-descriptive and predictable.

## 6. Coding Style & Best Practices

### 6.1. TypeScript

* **Strict Mode**: Adhere to `strict: true` in `tsconfig.json`.
* **No `any`**: Avoid `any` type. Use `unknown` with type guards, or define precise types. If `any` is absolutely unavoidable (rare cases), add a `// eslint-disable-next-line @typescript-eslint/no-explicit-any` with a comment explaining the reason.
* **Type Definitions**:
  * Prefer `interface` for defining the shape of objects that might be extended. Use `type` for union types, intersection types, primitives, or when utility types are involved.
  * Keep types close to where they are used. For shared types, use the designated `types/` directories.
* **Readonly**: Use `readonly` for properties that should not be reassigned after object creation and `ReadonlyArray<T>` for immutable arrays.
* **Enums**: Prefer string enums or string literal union types over numeric enums for better debuggability.

### 6.2. React

* **Functional Components & Hooks**: Exclusively use functional components and hooks.
* **`export default`**: Component files should `export default` the main component. Helper components or types can be named exports.
* **Props**:
  * Define prop types explicitly using `TypeScript` interfaces or types.
  * Destructure props at the beginning of the component function.
* **Hooks**:
  * Follow the Rules of Hooks.
  * **`ahooks`**: Strongly prefer using utilities from `ahooks` (e.g., `useRequest`, `useBoolean`, `useDebounceFn`, `useThrottleFn`, state management hooks) before writing custom hook logic. If a custom hook is needed, ensure it doesn't replicate `ahooks` functionality.
* **Keys**: Use stable, unique, and predictable keys for list rendering.
* **Memoization**: Apply `React.memo`, `useMemo`, and `useCallback` strategically for performance optimization, especially in complex components or lists. Provide justification if requested.
* **Error Boundaries**: Implement `React Error Boundaries` for graceful error handling in UI sections.
* **Path Aliases**: Always prefer using path aliases (e.g., `@/components/MyComponent`) over relative paths (e.g., `../../components/MyComponent`) for imports within the `src` directory. This improves readability and maintainability.

### 6.3. Styling (TailwindCSS)

* **Utility-First**: Primarily use `TailwindCSS` utility classes.
* **No Custom Global CSS**: Avoid adding styles to `src/index.css` or creating new global `CSS` files unless absolutely necessary (e.g., base font setup, third-party library overrides not manageable via `JS`).
* **Component-Specific Styles**: If a component requires complex or unique styles not easily achievable with `Tailwind` utilities, use `Tailwind's` `@apply` within a colocated `CSS Module` (e.g., `MyComponent.module.css`) or discuss alternative approaches.
* **Dark Mode**: Implement dark mode using `Tailwind's` `dark:` variant, assuming a `dark` class on the `<html>` element toggles it.
* **Theme Customization**: All theme customizations (colors, fonts, spacing) must be done in `tailwind.config.js`. Use `CSS` variables defined in `src/index.css` (and configured in `Tailwind`) if dynamic theming beyond `Tailwind's` direct capabilities is needed.

### 6.4. API Calls & Services

* **`ahooks useRequest`**: This is the **preferred** method for handling data fetching, caching, and state management for API calls.
* **Service Layer**: Abstract API call logic.
  * AI-related calls go into `src/ai/services/aiService.ts` or specific provider services.
  * Other backend API calls can be organized into feature-specific services (e.g., `src/features/article/services/articleApiService.ts`).
* **Error Handling**: `useRequest` provides error handling. Ensure user-facing errors are gracefully presented.
* **Environment Variables**: API keys, base URLs, and other sensitive configurations must be stored in `.env` files and accessed via `import.meta.env.VITE_...`.

### 6.5. AI Prompts

* **Location**: All prompts must reside in `src/ai/prompts/`.
* **File Structure**: Each prompt must be in its own `.ts` file, named in `kebab-case` (e.g., `content-strategy-prompt.ts`). The exported function should be `camelCase` (e.g., `contentStrategyPrompt`).
* **Typing**: Use the `PromptModule` type from `src/ai/types/promptTypes.ts`. All parameters and return types must be strictly typed. No `any`.
* **Loading**: Prompts are dynamically loaded via `src/ai/loaders/promptLoader.ts`.
* **Header Comments**: Each prompt file **must** begin with a comment block detailing its context and maintenance requirements:
  ```typescript
  // [Page/Feature where prompt is used] - Short description of the prompt's purpose.
  // Example: [战略罗盘页] - Generates content market research analysis.
  //
  // Inputs: (Optional: Describe parameters if not obvious from types or if there are specific constraints)
  //   - topic: string - The central theme for market research.
  // Outputs: (Optional: Describe expected output structure if complex or non-obvious)
  //   - A string containing market analysis with sections for heat, competition, audience, and 3 headline suggestions.
  //
  // IMPORTANT: If the underlying business logic, related UI, or data structures change,
  // this prompt and its header comment MUST be reviewed and updated accordingly.
  ```

## 7. Testing

* **Frameworks**: `Vitest` and `React Testing Library`.
* **File Location**: Test files (`*.test.ts` or `*.test.tsx`) should be colocated with the source files they are testing (e.g., `MyComponent.tsx` and `MyComponent.test.tsx` in the same directory).
* **Coverage**: Strive for high test coverage for hooks, utility functions, complex components, and critical business logic.
* **Focus**:
  * **Unit Tests**: For individual functions, hooks, and simple UI components (testing props, rendering, basic interactions).
  * **Integration Tests**: For components that interact with context, state, or multiple child components.
* **Mocking**: Use `Vitest's` mocking capabilities (`vi.mock`, `vi.fn`) for external dependencies, API calls (mock the service layer or `useRequest`), and AI services.

## 8. Documentation & Comments

* **Language for Documentation**: All project documentation, including files in the `docs/` directory, `JSDoc` comments, and `Storybook` descriptions, must be written in **English**.
* **JSDoc**: Use `JSDoc` for all exported functions, hooks, components, and complex internal logic. Describe purpose, parameters (`@param`), return values (`@returns`), and any side effects.
* **Inline Comments**: Explain non-obvious logic, workarounds, or important decisions.
* **`docs/` Directory**: This directory houses all project-level documentation.
  * **`docs/README.md`**: Overview of the project, its purpose, and a guide to navigating the documentation. May link to `CONTRIBUTING.md`.
  * **`docs/CONTRIBUTING.md`**: Guidelines for new contributors, including setup instructions, coding standards, branch strategy, and the Pull Request process.
  * **`docs/architecture/`**: Contains information about the system's architecture.
    * **`ADRs/` (Architecture Decision Records)**: `Markdown` files documenting significant architectural choices, their context, rationale, and consequences (e.g., `001-feature-sliced-design-adoption.md`, `002-state-management-strategy.md`).
    * High-level diagrams or explanations of the overall system structure.
  * **`docs/guides/`**: Practical how-to guides for developers, such as setting up specific development environments, using complex features, or common troubleshooting steps (e.g., `how-to-add-a-new-ai-provider.md`, `debugging-vite-issues.md`).
  * **`docs/design/` (`prototype.md`)**: `UI/UX` prototypes, mockups, user flow diagrams, and visual design specifications.
  * **`docs/product/` (`PRD.md`)**: Product Requirement Documents, including user stories, feature specifications, business rules, and acceptance criteria.
  * **`docs/uiux/` (`uiux.md`)**: Detailed `UI/UX` guidelines, principles, component library style guide (if not fully covered by `Storybook`), and accessibility (`a11y`) considerations.
  * **Synchronization**: When code changes impact design, product requirements, or `UI/UX`, you **must** also suggest updates to the relevant `Markdown` files in `docs/`.
  * **New Features**: For significant new features or refactors, a design document should be proposed for `docs/design/` or a new `ADR` in `docs/architecture/ADRs/` first.
* **Storybook**:
  * **File Location**: `Storybook` files (`*.stories.tsx` or `*.stories.mdx`) must be co-located with the component files they document (e.g., `MyComponent.tsx` and `MyComponent.stories.tsx` in the same directory).
  * **Purpose**: Stories should clearly demonstrate component props, various states, and usage examples. They serve as living documentation for UI components.
* **Commit Messages**: Follow the `Conventional Commits` specification (e.g., `feat: ...`, `fix: ...`, `docs: ...`, `refactor: ...`, `test: ...`). Include a scope if applicable (e.g., `feat(editor): ...`).
* **Markdown Formatting Guidelines**: When generating `Markdown` content (e.g., for `docs/` files or detailed explanations in chat):
  * **List Indentation**:
    * Use 2 spaces to indent nested list items.
    * Ensure consistent indentation for items at the same level.
    * Example:
    ```markdown
    * Level 1 item
      * Level 2 item (indented with 2 spaces)
        * Level 3 item (indented with 4 spaces)
    1. Ordered Level 1
      1. Ordered Level 2 (indented with 2 spaces)
    ```
  * **List Marker Space (`MD030`)**:
    * Ensure there is exactly one space after list markers (e.g., `*`, `-`, `+`, `1.`).
    * Example:
    ```markdown
    * Correct: One space after asterisk.
    - Correct: One space after hyphen.
    1. Correct: One space after number.

    *   Incorrect: Three spaces after asterisk.
    ```
  * **Inline Styling**:
    * Enclose inline code snippets, file paths, variable names, technical terms, and placeholders (e.g., `[PLACEHOLDER_TEXT]`) in single backticks (`` ` ``). Example: `src/components/MyComponent.tsx`, `const userName = 'test';`.
  * **Header Increments**:
    * Ensure header levels increment sequentially (e.g., from `# H1` to `## H2` to `### H3`). Do not skip header levels.
  * **Blank Lines**:
    * Use a single blank line to separate paragraphs or distinct blocks of content.
    * Avoid using multiple (two or more) consecutive blank lines.
  * **Line Endings**:
    * Avoid trailing spaces at the end of lines.
  * **Emphasis and Importance**:
    * Use asterisks for italics (`*italic*`) or bold (`**bold**`).
    * Use underscores for italics (`_italic_`) or bold (`__bold__`). Prefer asterisks for consistency if no other preference is set.

## 9. Workflow & Collaboration

* **Task Breakdown**: For complex requests, first outline the steps or files you intend to create/modify.
* **New Feature Development**:
  * Before implementing new features, carefully assess and ensure that existing functionalities are not adversely affected.
  * After code changes are complete, corresponding test cases and documentation **must** be updated.
* **Code & Doc Sync**: **This is critical.** After each significant code generation or modification, explicitly state which documentation files (in `docs/` or code comments/`JSDoc`) also need updating, and provide the suggested updates.
* **Linting & Formatting**: Assume `ESLint` and `Prettier` are run. Generated code should adhere to their rules.
* **Build & Type Checks**: Generated code must pass `pnpm build` and `pnpm tsc` (or `pnpm type-check` if that's the script).

## 10. Dependencies

* **`pnpm`**: Use `pnpm add <package>` for adding dependencies, `pnpm remove <package>` for removing.
* **`ahooks`**: As stated, prioritize `ahooks` for common `React` hook patterns.
* **Minimize New Dependencies**: Before suggesting a new library, consider if the functionality can be achieved with existing tools or a small amount of custom code. Discuss if a new dependency is substantial.

## 11. Things to AVOID

* **Modifying `copilot-instructions.md`**: Do not suggest changes to this file yourself. We will manage it.
* **Global Styles**: Do not add to global `CSS` files unless explicitly instructed for specific reasons (like base setup).
* **`any` type**: Strictly avoid.
* **Large, Monolithic Components**: Break them down.
* **Direct DOM Manipulation**: Use `React's` declarative patterns.
* **Hardcoding Sensitive Data**: Use environment variables.
* **Ignoring Errors**: Implement proper error handling.
* **Outdated Documentation**: Always strive to keep code and docs in sync.
* **Suggesting overly broad refactors without specific instructions or a clear plan**.

