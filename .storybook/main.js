const sveltePreprocess = require('svelte-preprocess');

module.exports = {
    webpackFinal: async config => {
        const svelteLoader = config.module.rules.find(
            r => r.loader && r.loader.includes('svelte-loader'),
        );
        svelteLoader.options = {
            ...svelteLoader.options,
            preprocess: sveltePreprocess({postcss: true}),
        };
        return config;
    },
    stories: [
        '../src/components/**/*.stories.mdx',
        '../src/pages/**/*.stories.mdx',
        '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
        '../src/pages/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
