const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production'; // true or false
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallbackLoader: 'style-loader',
  loader: ['css-loader', 'sass-loader'],
  publicPath: '/dist',
});
const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpe?g|png|ico|gif|ttf|svg)$/i,
        use: ['file-loader?name=style/[name].[ext]',
          'image-webpack-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: true, // za react-router
    proxy: {
      '/': {
        target: 'http://localhost:9000/',
        secure: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Eventio',
      hash: true,
      template: './src/index.html',
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: !isProd,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([{ from: 'src/Style/style/main-min.png', to: 'style/main-min.png' }]),
  ],
};
