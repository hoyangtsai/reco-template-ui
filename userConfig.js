module.exports = {
  jsPath: "client/container",
  stylePath: "client/style",
  htmlPath: "client/html",
  imgPath: "client/image",
  projectName: "foobar",
  userName: "ben",
  sprites: {
    spritesmith: {
      padding: 4
    }, //雪碧图间距
    retina: true, //retina屏幕
    ratio: 3 //图片分倍率
  },
  webpack: {
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
    resolve: {
      alias: {
        "components": "", //组件路径
        "currentDir": process.cwd()
      }
    }
  },
  browsersList: [
    'last 4 versions',
    'Android >= 4.0',
    'Chrome >= 37',
    'iOS>=7'
  ],
  postcss: false, //true or false
  pageConfig: "config/pageConfig.js",
  devDirectory: "_tmp"
}
