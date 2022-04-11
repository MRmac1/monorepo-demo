const webpack = require('webpack');
// const glob = require('glob')
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;