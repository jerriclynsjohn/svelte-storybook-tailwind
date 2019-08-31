const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = async ({ config }) => {
  config.module.rules = config.module.rules.map(f => {
    // Needed to add this to ignore our ../src/ for the default rule, instead of purging it.
    if (f.test.toString() === '/\\.css$/') {
      f.exclude = path.resolve(__dirname, '../src/');
    }

    return f;
  });

  config.module.rules.push({
    test: /\.css$/,
    include: path.resolve(__dirname, '../src/'), // Needed to be changed from ../
    loaders: ['style-loader', 'css-loader', 'postcss-loader'],
  });

  return config;
};