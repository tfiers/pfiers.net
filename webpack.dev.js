const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: __dirname,
    compress: true,
    historyApiFallback: true,
    publicPath: "/dist/",
    overlay: true
  }
});