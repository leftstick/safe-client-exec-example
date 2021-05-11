const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    filename: 'intermediate_asset.js',
    path: path.resolve(__dirname, 'dist'),
  },

  target: 'es5',

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
