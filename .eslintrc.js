module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: { react: { version: "detect" } },
  extends: ["plugin:react/recommended", "xo", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-undef": "off",
    "react/jsx-key": "off",
  },
};
