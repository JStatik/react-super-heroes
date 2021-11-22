module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'standard'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react',
        'react-hooks'
    ],
    settings: {
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            fragment: 'Fragment',
            version: 'detect',
            flowVersion: '0.53'
        },
        propWrapperFunctions: [
            'forbidExtraProps',
            { property: 'freeze', object: 'Object' },
            { property: 'myFavoriteWrapper' }
        ],
        componentWrapperFunctions: [
            'observer',
            { property: 'styled' },
            { property: 'observer', object: 'Mobx' },
            { property: 'observer', object: '<pragma>' }
        ],
        linkComponents: [
            'Hyperlink',
            { name: 'Link', linkAttribute: 'to' }
        ]
    },
    rules: {
        camelcase: 'off',
        curly: ['warn', 'multi-or-nest'],
        indent: ['warn', 4, { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'] }],
        semi: ['error', 'always'],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': ['warn', { mode: 'minimum' }],
        'keyword-spacing': 'off',
        'multiline-ternary': 'off',
        'no-multi-spaces': 'off',
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0, maxBOF: 0 }],
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'no-trailing-spaces': ['warn', { skipBlankLines: true }],
        'no-unused-vars': 'warn',
        'operator-linebreak': ['error', 'after', { overrides: { '&&': 'ignore', '?': 'ignore', ':': 'ignore' } }],
        'template-curly-spacing': ['error', 'always'],
        'react/button-has-type': 'error',
        'react/display-name': 'off',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-max-props-per-line': ['warn', { maximum: 1 }],
        'react/jsx-newline': [1, { prevent: false }],
        'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
        'react/no-array-index-key': 'error',
        'react/no-multi-comp': 'error',
        'react/self-closing-comp': ['error', { component: true, html: true }],
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error'
    }
};
