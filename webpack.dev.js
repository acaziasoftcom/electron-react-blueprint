const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common')

module.exports = merge(common, {
  target: 'electron-renderer',
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    port: 9000,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    })

  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              sourceMap: true,
              modules: false,
              localIdentName: '[name]_[local]_[hash:base64:10]',
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(styl)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'stylus-loader'
          }
        ]
      }
    ]
  }
})
