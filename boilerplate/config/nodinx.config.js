module.exports = {
  jsPath: "client/container",
  stylePath: "client/style",
  htmlPath: "client/html",
  imgPath: "client/image",
  projectName: "{{name}}",
  userName: "{{author}}",
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
  postcss: false, //true or false
  devDirectory: "dist",
  path: "", //页面层级
  entry: ["index"], //页面文件列表 Array or Object
  commonsChunk: {
    name: null, //公共js、样式文件名，默认common
    minChunks: null, //至少几个文件出现才抽取公共
    exclude: []
  }
}
