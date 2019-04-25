var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  target: 'node',
  devtool: false,
  entry: ['babel-polyfill', './app.js'],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs'
  },
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.VUE_ENV': '"server"'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
      new CopyWebpackPlugin([
        {from: path.resolve(process.cwd(),'public'), to: path.resolve(process.cwd(),'dist/public') },
        {from: path.resolve(process.cwd(),'views'), to: path.resolve(process.cwd(),'dist/views') }
      ]),
      new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false },
          sourceMap: true
      })
  ]
}
