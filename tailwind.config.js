module.exports = {
    purge: {
        content: ['./src/**/*.svelte', './src/**/*.html'],
        options: {
            whitelist: [/svelte-/],
            /* eslint-disable no-unused-vars */
            defaultExtractor: content =>
                [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
                    ([_match, group, ..._rest]) => group,
                ),
        },
    },
    theme: {
        fontFamily: {
            sans: ['Noto Sans', 'sans-serif'],
        },
        extend: {
        },
    },
    variants: {},
    plugins: [],
};
