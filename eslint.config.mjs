import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            "indent": ["error", 4, { "SwitchCase": 1 }],
            "@typescript-eslint/no-explicit-any": 0,
            "@typescript-eslint/no-unused-vars": 1
        }
    }
];