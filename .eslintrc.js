module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  settings: {
    react: {
      version: "18.2.0",
    },
  },
  rules: {
    "object-curly-spacing": "off",
    quotes: "off",
    "prettier/prettier": "error",
    "react/prop-types": "off",
  },
};
