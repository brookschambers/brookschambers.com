/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:vitest/recommended",
  ],
  plugins: ["@typescript-eslint", "import", "prettier", "vitest"],
  rules: {},
};
