// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: "readonly",
      },
    },
    plugins: {
      react: pluginReact,
      prettier: prettierPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // <-- Important!
      "prettier/prettier": "error",
      "react/prop-types": "off", // <-- Disable if not using PropTypes
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      configPrettier,
    ],
  },
]);
