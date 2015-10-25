var webpack = require('webpack');

var port = process.env.PORT || 8080;

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://voting-server.clementmiao.com',
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    './src/index.jsx',
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel',
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer?browsers=last 2 versions',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
