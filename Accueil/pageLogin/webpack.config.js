const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      firebase: 'firebase/app',
    },
  },
  devtool: 'eval-cheap-source-map',
  watch: true,
};
