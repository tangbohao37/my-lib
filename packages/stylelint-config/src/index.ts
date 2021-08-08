module.exports = {
  extends: [
    require.resolve('stylelint-config-standard'),
    require.resolve('stylelint-prettier/recommended'),
  ],
  plugins: [require.resolve('stylelint-prettier')],
  rules: {
    'prettier/prettier': true,
    'function-name-case': null,
    'selector-pseudo-class-no-unknown': null,
  },
  ignoreFiles: ['**/*.(t|j)sx'],
};
