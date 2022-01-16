module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module'
    },
    env: {
        es6: true,
        browser: true,
        node: true
    },
    plugins: ['svelte3'],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    extends: ['eslint:recommended', 'prettier', 'plugin:json/recommended'],
    rules: {
        'json/*': ['error', 'allowComments']
    },
    settings: {
        // ...
    }
};
