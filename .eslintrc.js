module.exports = {
  extends: [
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "airbnb",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "import/extensions": [
      "off",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "no-restricted-exports": "off",
    "import/export": "off",
    "default-param-last": "off",
    "consistent-return": "off",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "react/jsx-filename-extension": "off",
    "react/function-component-definition": "off",
    "prettier/prettier": "warn",
  },
};
