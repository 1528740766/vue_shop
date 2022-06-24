const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer: {
  //   port: 8080,
  //   open: true,
  //   proxy: {
  //     '/api': {
  //       target: 'http://192.168.1.104:8888',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }

})
