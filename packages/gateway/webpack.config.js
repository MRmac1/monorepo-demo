const webpack = require('webpack');
// const glob = require('glob')
const path = require('path');

// const entryDirs = glob.sync('./src/*/*.js').reduce((prev, cur) => {
//   prev[path.parse(cur).name] = cur;
//   return prev
// }, {})

// console.log('entryDirs', entryDirs, glob.sync('./src/*/*.js'));

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'es'),
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