var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: {
    'home': './gifs/static/js/pages/home.js',
    'about': './gifs/static/js/pages/about.js',
    'trendChart': './gifs/static/js/pages/trendChart.js'
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
      },
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},	
			{
				test: /\.(png|jpg|jpeg)$/,
				use: [
					{loader: 'url-loader'}
				]
			},
			{
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

};
