'use strict'
var webpack = require('webpack');
var path = require('path')

var webpackDevHost = '0.0.0.0'
var webpackDevPort = 8080


module.exports = {
  context: __dirname,
  entry: {
    'index': [
      'webpack-dev-server/client?' + webpackDevHost + ':' + webpackDevPort, // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './index.jsx'
    ]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ],
  },
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: '[name].js',
    publicPath: '/bundle/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    hot: true,
    inline: true,
    progress: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000'
      }
    }
    /*, historyApiFallback: true */
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}
