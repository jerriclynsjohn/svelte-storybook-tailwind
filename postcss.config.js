const tailwind = require('tailwindcss');
const postcssimport = require('postcss-import');
const postcssurl = require('postcss-url');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const plugins =
    process.env.NODE_ENV === 'production'
        ? [postcssimport, postcssurl, tailwind, autoprefixer, cssnano]
        : [postcssimport, postcssurl, tailwind, autoprefixer];

module.exports = { plugins };
