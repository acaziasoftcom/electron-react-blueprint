const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js',
    require.resolve('react-dev-utils/webpackHotDevClient')
  ],
  target: 'electron-main',
  plugins: [
    new CleanWebpackPlugin(['dist/**/*']),
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
