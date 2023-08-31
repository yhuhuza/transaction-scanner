module.exports = {
  env: {
      browser: true,
      es2021: true
  },
  extends: [ "eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended", "plugin:vue/vue3-recommended" ],
  plugins: [ "@typescript-eslint", "prettier", "vue", "eslint-plugin-import" ],
  parser: "vue-eslint-parser",
  parserOptions: {
      parser: '@typescript-eslint/parser',
      project: 'tsconfig.json',
      tsconfigRootDir: './',
      extraFileExtensions: ['.vue']
  },
  rules: {
    'import/order': ['error', {
      "pathGroups": [{
        "pattern": "~/**",
        "group": "internal"
      }],
      'groups': ['builtin', 'external', 'internal', 'parent', 'index', 'sibling', 'type'],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: false
      }
    }],
    'import/newline-after-import': 'error',
    'no-console': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'vue/multi-word-component-names': 0,
    'vue/no-deprecated-dollar-scopedslots-api': 0,
    'vue/require-default-prop': 0,
    'prettier-vue/prettier': ['error', {
      singleQuote: true,
      htmlWhitespaceSensitivity: 'ignore',
      printWidth: 120
    }],
    'vue/no-multiple-template-root': 'off'
  },
  "overrides": [{
    // enable the rule specifically for TypeScript files
    "files": ["*.ts"],
    "rules": {
      "@typescript-eslint/explicit-function-return-type": "error"
    }
  }]
}
