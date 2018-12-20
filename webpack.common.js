const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  target: 'electron-main',
  plugins: [
    new CleanWebpackPlugin(['dist/**/*']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
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
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.json']
  }
}