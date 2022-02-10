/*
 * @Author: 邱扬
 * @LastEditors: 邱扬
 * @description: page description
 * @Date: 2022-01-27 13:23:33
 * @LastEditTime: 2022-02-10 18:15:02
 */
const { resolve } = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const argv = require('minimist')(process.argv.slice(2))
const { mode } = argv
const config = require(`./webpack.${mode}`)
const WebpackBar = require('webpackbar')
const baseConfig = {
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, '../dist/'),
  },
  cache: {
    type: 'filesystem',
  },
  resolve: {
    extensions: ['.ts', '.vue', '.json', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            [
              '@babel/preset-typescript', // 引用Typescript插件
              {
                allExtensions: true, // ?支持所有文件扩展名
              },
            ],
          ],
        },
      },
      {
        test: /\.vue$/, // 处理vue文件，会将lang="ts"的代码，转交给babel-loader
        use: ['vue-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: { // 配置参数
            // 这种配置语法叫做：占位符
            name: '[name]_[hash].[ext]', // 使用图片的名字，并使用图片的后缀
            limit: 10240
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: {
        removeAttributeQuotes: true,
      },
      hash: true /*防止缓存*/
    }),
    new VueLoaderPlugin(),
    new WebpackBar(),
    new FriendlyErrorsWebpackPlugin({
      // 成功的时候输出
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://localhost:8080`]
      },
      // 是否每次都清空控制台
      clearConsole: true,
    })
  ],
  mode,
  performance: {
    hints: false
  }
}

module.exports = merge(baseConfig, config)
