import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/pages/**/*.stories.@(js|jsx|mjs|ts|tsx)", // Only include stories from src/pages
    "../src/shared/**/*.stories.@(js|jsx|mjs|ts|tsx)", // And src/shared
    "../src/features/**/*.stories.@(js|jsx|mjs|ts|tsx)", // And src/features
    "../src/widgets/**/*.stories.@(js|jsx|mjs|ts|tsx)" // And src/widgets
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;
