module.exports = {
    root: true,
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        jest: true,
        node: true,
    },
    plugins: ["react", "react-hooks", "import", "prettier", "no-unused-react-component-methods"],
    rules: {
        "no-console": "off",
        "no-use-before-define": ["error", { functions: false, classes: false, variables: false }], // catch useCallback
        "react/no-did-mount-set-state": 2,
        "react/no-direct-mutation-state": 2,
        "react/jsx-uses-vars": 2,
        "no-unused-react-component-methods/no-unused-react-component-methods": 2,
        "react/no-unused-state": 2,
        "no-undef": 2,
        semi: 2,
        "react/prop-types": 2,
        "react/jsx-no-bind": 2,
        "react/jsx-no-duplicate-props": 2,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "parent", "sibling", "index", "object", "type"],
            },
        ],
        "prettier/prettier": "error",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
