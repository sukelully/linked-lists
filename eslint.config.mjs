import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {},
    rules: {
      ...prettierConfig.rules,
    },
    extends: [js.configs.recommended],
  },
]);
