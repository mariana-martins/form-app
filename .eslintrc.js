module.exports = {
  env: {
    browser: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 5
  },
  rules: {
    quotes: 2,
    semi: "always"
  }
}
