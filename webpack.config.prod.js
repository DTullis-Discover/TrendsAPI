var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: {
    'home': './gifs/static/js/pages/home.js',
  },

  output: {
      path: path.resolve('./gifs/static/bundles'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './gifs/webpack-stats.json'}),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

};
