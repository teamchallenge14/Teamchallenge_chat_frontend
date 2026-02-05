// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { config, configs } from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import vitest from 'eslint-plugin-vitest';

export default config(
  // Global ignores
  { ignores: ['dist', 'node_modules', 'coverage', '**/*.d.ts'] },

  // --- Base Configuration (Application Code) ---
  {
    extends: [js.configs.recommended, ...configs.recommended, ...configs.strict], // Strict rules for better code quality
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
    },
  },

  // --- UI Components Configuration (Shadcn/UI overrides) ---
  {
    // Apply this override ONLY to shadcn components in the 'ui' folder
    files: ['src/components/ui/**/*.tsx'],
    rules: {
      // Allow exporting utility variants (like buttonVariants) alongside components
      'react-refresh/only-export-components': 'off',
    },
  },

  // --- Test Configuration (Vitest) ---
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    plugins: {
      vitest,
    },
    languageOptions: {
      globals: {
        ...globals.browser, // Keep browser globals (window, document) for React tests
        // Note: Vitest globals (describe, it, expect) are NOT enabled here.
        // You must import them explicitly from 'vitest'.
      },
    },
    rules: {
      ...vitest.configs.recommended.rules,

      // --- Safety Checks ---
      'vitest/no-focused-tests': 'error', // Prevent committing .only tests (CI/CD safety)
      'vitest/expect-expect': 'warn', // Enforce having at least one assertion in a test
      'vitest/no-conditional-expect': 'warn', // Disallow expect() inside if/else (flaky tests prevention)
      'vitest/no-conditional-in-test': 'warn', // Tests should be flat and linear, no conditional logic

      // --- Best Practices & Readability ---
      'vitest/prefer-todo': 'warn', // Use test.todo('...') instead of empty test bodies
      'vitest/prefer-mock-promise-shorthand': 'warn', // Enforce concise mock syntax
      'vitest/prefer-spy-on': 'warn', // Encourage vi.spyOn() over manual assignments
      'vitest/prefer-strict-equal': 'warn', // Enforce strict equality checks (checks types as well)

      // --- Improved Error Messages (Specific Matchers) ---
      // These rules enforce using specific matchers (e.g., .toBeNull()) instead of generic ones (.toBe(null)).
      // Specific matchers provide much clearer error messages when a test fails.
      'vitest/prefer-to-be-null': 'warn',
      'vitest/prefer-to-be-undefined': 'warn',
      'vitest/prefer-to-be-truthy': 'warn',
      'vitest/prefer-to-be-falsy': 'warn',
      'vitest/prefer-to-contain': 'warn', // Use .toContain() for arrays/strings
      'vitest/prefer-to-have-length': 'warn', // Use .toHaveLength() instead of .toBe(x.length)
      'vitest/prefer-to-have-shape': 'warn',
      'vitest/prefer-to-have-subset': 'warn',
      'vitest/prefer-to-not-be-null': 'warn',
      'vitest/prefer-to-not-be-undefined': 'warn',
      'vitest/prefer-to-not-be-empty-object': 'warn',
      'vitest/prefer-to-be-empty': 'warn',
      'vitest/prefer-to-be-defined': 'warn',
    },
  },

  // --- Prettier (Must be last) ---
  eslintPluginPrettierRecommended,
);
