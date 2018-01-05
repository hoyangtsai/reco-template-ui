const path = require('path');
const pkgJson = require('../package.json');

module.exports = {
  postcss: false, //true or false
  devDirectory: '_tmp',

  webpack: {
    context: path.join(process.cwd(), 'client/container'),
    entry: ["index"],
    output: {
      path: path.join(process.cwd(), 'publish'),
    },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
    resolve: {
      alias: {
        "components": "", //组件路径
        "currentDir": path.join(process.cwd(), 'client')
      }
    },
    module: {
      rules: [
      ]
    },
    plugins: [],
    recoCustom: {
      commonsChunk: {
        name: null, //公共js、样式文件名，默认common
        minChunks: false, //至少几个文件出现才抽取公共
        exclude: []
      },
      htmlWebpackPlugin: {
        template: path.join(process.cwd(), "template/common.ejs"),
      }
    }
  },

  upload: {
    project: pkgJson.name,
    user: pkgJson.author,
    host: 'http://wapstatic.sparta.html5.qq.com/upload',
    timeout: 30000,
    dir: 'publish'
  },

  sprites: {
    spritesmith: {
      padding: 4
    }, //雪碧图间距
    retina: true, //retina屏幕
    ratio: 3 //图片分倍率
  },
}
