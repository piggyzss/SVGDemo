const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ROOT = path.resolve(__dirname)
const SRC_PATH = path.join(__dirname, './src')
const DIST_PATH = path.resolve(__dirname, './dist')
// source-map

// 222 /Users/zhaoshanshan/demo/react_demo
// 333 /Users/zhaoshanshan/demo/src
// 444 /Users/zhaoshanshan/demo/dist
console.log('111', path)
console.log('222', ROOT)
console.log('333', SRC_PATH)
console.log('444', DIST_PATH)

module.exports={
  entry: `${SRC_PATH}/index.js`,
  output:{
    path:DIST_PATH,
    filename:'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader?cacheDirectory=true'],
        // 指定babel-loader、eslint-loader
        exclude: /node_modules/,
        include: path.join(ROOT, './src')
      },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        include: path.join(ROOT, './src'),
        use: [
          {loader: "style-loader"},
          {loader: 'css-loader'},
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            }
          }]
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".png"],
    alias: {
      '@': SRC_PATH
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',  // 指定你生成的文件所依赖哪一个html文件模板
      minify: {  // 使用minify会对生成的html文件进行压缩。默认是false。html-webpack-plugin内部集成了 html-minifier
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // chunks : chunks主要用于多入口文件，当你有多个入口文件，那就回编译后生成多个打包后的文件，那么chunks 就能选择你要使用那些js文件
        // cache : 默认是true的，表示内容变化的时候生成一个新的文件。
      },
      filename: 'index.html'  // 就是html文件的文件名
    }),
  ],
  devServer:{
    contentBase:"./src",
    historyApiFallback: true,
  }
}