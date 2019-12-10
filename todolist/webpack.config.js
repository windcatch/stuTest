module.exports = {
  entry: './main.js',                 // webpack打包的入口文件
  output: {
    filename: './bundle.js'           // 输出之后的文件名
  },
  module: {
    rules: [    //webpack 3版本是loaders
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'         // babel的loader，jsx文件使用babel-loader处理
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'              // css和styleloader，对css后缀的文件进行处理
      }
    ]
  },
  devtool: 'cheap-source-map',
  mode: 'development'
}