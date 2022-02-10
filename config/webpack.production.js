/*
 * @Author: 邱扬
 * @LastEditors: 邱扬
 * @description: page description
 * @Date: 2022-01-27 13:23:58
 * @LastEditTime: 2022-02-10 13:56:27
 */
module.exports = {
    configureWebpack: config => {
        // 为生产环境修改配置...
        if (process.env.NODE_ENV === 'production') {
            config.mode = 'production';
            // 打包文件大小配置
            config.performance = {
              maxEntrypointSize: 10000000,
              maxAssetSize: 30000000
            }
        }
    }
}