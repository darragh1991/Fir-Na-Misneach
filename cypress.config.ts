import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    baseUrl: "http://localhost:4200/",
    specPattern: "cypress/integration/spec/**/*.spec.ts",
    supportFile: "cypress/support/e2e.ts",
    video: false
  },
  component: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
  env: {
    codeCoverage: {
      enabled: true,
      exclude: [
        'cypress/**/*',
        '**/*.spec.ts',
        '**/*.test.ts',
        'src/test.ts',
        'src/environments/**',
        '**/*.module.ts',
        'src/main.ts'
      ]
    }
  }
});
