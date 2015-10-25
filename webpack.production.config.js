var path = require('path');
var webpack = require('webpack');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');

var config = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        exclude: [nodeModulesDir],
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [nodeModulesDir],
      },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer?browsers=last 2 versions',
      },
    ]
  },
};

module.exports = config;
