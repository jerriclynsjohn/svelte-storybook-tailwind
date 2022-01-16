module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-svelte-csf',
        '@storybook/addon-storysource',
        '@storybook/addon-a11y'
    ],
    framework: '@storybook/svelte',
    svelteOptions: {
        preprocess: require('svelte-preprocess')({postcss: true})
    }
};
