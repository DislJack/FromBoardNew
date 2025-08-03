/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      all: false,
      clean: true,
      include: [
        'src/components/**/*.tsx',
        '!src/**/*.test.tsx', 
        '!src/**/*.stories.tsx' 
      ],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/*.d.ts',
        '**/types/**',
        '**/utils/**',
        '**/hooks/**',
        '**/api/**',
        'src/data/**'
      ],
    },
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '.storybook/**'
    ],
    projects: [{
      extends: true,
      test: {
        name: 'unit',
        include: ['src/components/**/*.{test,spec}.{js,ts,jsx,tsx}'],
        setupFiles: ['./vitest.unit.setup.ts']
      }
    }, 
    {
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});