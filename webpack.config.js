var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  mode: 'development',
  entry: ['@babel/polyfill', APP_DIR + '/index.js'],
  output: {
    path: BUILD_DIR,
    filename: 'index.js',
    library: 'default',
    libraryTarget: 'commonjs2'
  },
  module : {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
    }
    ]
  }
};

module.exports = config;
