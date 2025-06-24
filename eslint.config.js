// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default tseslint.config({ ignores: ['dist'] }, {
  // @ts-expect-error temporary fix for https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/1035
  plugins: { 'jsx-a11y': jsxA11y },
  rules: {
    // @ts-expect-error temporary fix for https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/1035
    ...jsxA11y.configs.recommended.rules,
  },
}, {
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    // No need to add jsxA11y here again if defined globally or in another config object
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // You can fine-tune jsx-a11y rules here if needed, e.g.:
    // 'jsx-a11y/anchor-is-valid': 'off',
  },
}, storybook.configs["flat/recommended"]);
