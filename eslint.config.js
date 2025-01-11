import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { configs as tsConfigs } from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parser,
    },
    plugins: {
      react, // Плагин для React
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/prop-types': 'off', // This will suppress the react/prop-types warning for all components, relying on TypeScript for type validation.
    },
  },
  {
    files: ['.ts', '.tsx'],
    languageOptions: {
      parser,
    },
    plugins: {
      '@typescript-eslint': tsConfigs.recommended,
    },
    rules: {
      ...tsConfigs.recommended.rules,
    },
  },
  {
    extends: [js.configs.recommended, prettier],
  },
];
