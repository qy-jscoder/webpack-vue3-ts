/*
 * @Author: 邱扬
 * @LastEditors: 邱扬
 * @description: page description
 * @Date: 2022-01-27 13:23:33
 * @LastEditTime: 2022-01-28 18:14:57
 */
const { resolve } = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

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
        test: /\.scss$/,
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
      // {
      //   test: /\.mjs$/,
      //   include: /node_modules/,
      //   type: "javascript/auto"
      // }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
    new VueLoaderPlugin(),
    new WebpackBar(),
    new FriendlyErrorsWebpackPlugin()
  ],
  mode
}

module.exports = merge(baseConfig, config)
