import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, './build'],
    testTimeout: 0,
    maxWorkers: 10,
    maxConcurrency: 10,
  },
});
