module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'rules/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'brace-style': [2, 'stroustrup'],
    'comma-dangle': [2, 'only-multiline'],
    'quote-props': ['error', 'consistent'],
    'object-curly-spacing': ['error', 'always'],
    'indent': ['error', 2, {
      VariableDeclarator: 'first',
      MemberExpression: 0,
      flatTernaryExpressions: true,
      ignoredNodes: ['JSXElement *'],
    }],
    'react/jsx-curly-newline': [2, { multiline: 'consistent', singleline: 'consistent' }],
    'react/jsx-tag-spacing': [2, { 'beforeSelfClosing': 'always' }],
    'react/jsx-closing-bracket-location': [2, { 'location': 'tag-aligned' }],
    'react/jsx-indent-props': [2, 1],
  }
}
