var path = require('path');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel',
      exclude: [nodeModulesDir],
      loader: 'babel',
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer?browsers=last 2 versions',
    }]
  },
};

module.exports = config;
