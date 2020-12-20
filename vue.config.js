module.exports = {
  publicPath: '/', // 根域上下文目录
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: false,
  devServer: {
    proxy: {
      '/baidu_music_api': {
        target: 'http://tingapi.ting.baidu.com/',
        pathRewrite:{
          "^/baidu_music_api":""
        },
        changeOrigin: true
      }
    }
  }
}