const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  target: 'electron-main',

  externals: {
    bindings: 'require("bindings")' // fixes warnings during build
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      title: 'POS App'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.json']
  }
}
