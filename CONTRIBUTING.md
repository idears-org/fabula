# Contributing to the Project

Thank you for considering contributing! We welcome all contributions, from bug reports and feature requests to code contributions.

## Getting Started

* **Prerequisites**: Ensure you have `Node.js` and `pnpm` installed. Refer to the main project `README.md` or `package.json` for specific version requirements.
* **Fork & Clone**: Fork the repository on `GitHub` (if applicable) and clone your fork locally.
* **Installation**: Navigate to the project directory and run `pnpm install` to install dependencies.
* **Running Locally**: Use `pnpm dev` (or the command specified in the main `README.md`) to start the development server.

## Development Workflow

1. **Branching**: Create a new branch for your feature or bug fix from the `main` (or `develop`, if used) branch. Branch names should ideally follow a convention like `type/scope/short-description` (e.g., `feat/editor/add-table-support`, `fix/auth/login-redirect`).
2. **Coding Standards**: Adhere to the coding styles and conventions defined by the project. These are typically enforced by `ESLint` and `Prettier`, and may be further detailed in project-specific instructions.
   * Run `pnpm lint` (or equivalent) and ensure your code is formatted correctly before committing.
   * Ensure your code passes type checks (e.g., `pnpm type-check` or as part of the `build` script).
3. **Testing**: Write unit and/or integration tests for your changes. Ensure all tests pass (e.g., `pnpm test`).
4. **Documentation**: Update relevant documentation (files in the `docs/` directory) if your changes impact existing features or add new ones.
5. **Commit Messages**: Follow the [`Conventional Commits`](https://www.conventionalcommits.org/) specification for clear and consistent commit history.
6. **Pull Request (`PR`)**:
   * Push your branch to your fork.
   * Create a `PR` against the `master` (or `develop`) branch of the original repository.
   * Provide a clear description of your changes in the `PR`.
   * Ensure all `CI` checks (if configured) pass.
7. **Code Review**: Your `PR` will be reviewed by maintainers. Address any feedback provided.

## Reporting Bugs

* Use the `GitHub Issues` tab (if the project is hosted on `GitHub`).
* Provide a clear title and a detailed description of the issue, including steps to reproduce, expected behavior, and actual behavior.
* Include information about your environment (`OS`, `browser`, `Node version`, etc.) if relevant.

## Suggesting Enhancements

* Use the `GitHub Issues` tab (if applicable) with an `enhancement` or `feature request` label.
* Clearly describe the proposed enhancement and its benefits to users or developers.
