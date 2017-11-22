module.exports = {
  postcss: false, //true or false

  webpack: {
    context: path.join(process.cwd(), 'client'),
    entry: ["container/index"],
    output: {
      path: path.join(process.cwd(), 'dist'),
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
    plugins: {
      commonsChunk: {
        name: null, //公共js、样式文件名，默认common
        minChunks: null, //至少几个文件出现才抽取公共
        exclude: []
      },
      HtmlWebpackPlugin: {
        template: path.join(process.cwd(), "template/index.dev.ejs"),
      }
    }
  },

  sprites: {
    spritesmith: {
      padding: 4
    }, //雪碧图间距
    retina: true, //retina屏幕
    ratio: 3 //图片分倍率
  },
}
