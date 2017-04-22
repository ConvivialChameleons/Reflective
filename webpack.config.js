const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'client/src');
const BUILD_DIR = path.resolve(__dirname, 'client/public');

const config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: BUILD_DIR,
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = config;