/*
 * @Author: 邱扬
 * @LastEditors: 邱扬
 * @description: page description
 * @Date: 2022-01-27 13:23:47
 * @LastEditTime: 2022-02-10 17:55:54
 */
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
module.exports = {
    devServer: {
        historyApiFallback: true, //解决刷新无法找到文件问题
        port: 8080,
        open: true,
        hot: true
    }
}