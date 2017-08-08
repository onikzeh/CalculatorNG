const conf = require('./conf');
const build = require('./build');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [build.js]
  },
  output: {
    filename: '[name].js',
    path: build.dirs.dist,
    publicPath: '/'
  },
  devtool: conf.isDev ? 'source-map' : null,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'ng-annotate-loader' },
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\/partials\/.+\.html$/,
        loader: 'ngtemplate-loader?relativeTo=' + build.partials + '/!html-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(build.clean),
    new HtmlWebpackPlugin({ template: build.html }),
    new WebpackCdnPlugin({
      modules: [
        { name: 'angular', path: 'angular.min.js' },
        { name: 'angular-animate', path: 'angular-animate.min.js' },
        { name: 'angular-aria', path: 'angular-aria.min.js' },
        { name: 'angular-material', path: 'angular-material.min.js', style: 'angular-material.min.css' },
        { name: 'angular-route', path: 'angular-route.min.js' }
      ],
      prod: !conf.isDev
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: conf.isDev
    })
  ],
  devServer: {
    compress: true,
    hot: true,
    contentBase: ['./dist', './node_modules'],
    historyApiFallback: true,
    publicPath: '/'
  }
};
