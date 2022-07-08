/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  plugins: ["@typescript-eslint"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/ban-ts-comment": "off",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/require-name-property": ["error"],
  },
  env: {
    "vue/setup-compiler-macros": true,
  },
};
