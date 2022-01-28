/*
 * @Author: 邱扬
 * @LastEditors: 邱扬
 * @description: page description
 * @Date: 2022-01-27 13:23:47
 * @LastEditTime: 2022-01-28 14:16:50
 */
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
module.exports = {
    devServer: {
        port: 8080,
        open: true,
        hot: true
    },
    // plugins: [
    //     new FriendlyErrorsWebpackPlugin()
    // ]
}