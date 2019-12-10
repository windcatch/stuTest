let path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: './js/main.js',                 // webpack打包的入口文件  要打包的文件
    output: {
        filename: './bundle.js'           // 输出之后的文件名
    },
    module: {
        rules: [    //webpack 3版本是loaders
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'         // babel的loader，jsx文件使用babel-loader处理
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
            {test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"}
        ]
    },
    devtool: 'cheap-source-map',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "this is title", //用于生成的HTML文档的标题。
            filename: "index.html", // 生成的模板文件的名字 默认index.html
            template: "index.html", //模板来源文件
            inject: false, //注入位置'head','body',true,false
            favicon: "", //指定页面图标
            minify: {
                caseSensitive: false, ////是否大小写敏感
                collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled
                collapseWhitespace: true //是否去除空格
            },
            hash: true, //是否生成hash添加在引入文件地址的末尾，类似于我们常用的时间戳，这个可以避免缓存带来的麻烦
            cache: true, //是否需要缓存，如果填写true，则文件只有在改变时才会重新生成
            showErrors: true, //是否将错误信息写在页面里，默认true，出现错误信息则会包裹在一个pre标签内添加到页面上
            chunks: ['a', 'b'], //引入的a,b模块，这里指定的是entry中设置多个js时，在这里指定引入的js，如果不设置则默认全部引入,数组形式传入
            chunksSortMode: "auto", //引入模块的排序方式
            excludeChunks: ['a', 'b'], //排除的模块,引入的除a,b模块以外的模块，与chunks相反
            xhtml: false //生成的模板文档中标签是否自动关闭，针对xhtml的语法，会要求标签都关闭，默认false
        }),
        new webpack.ProvidePlugin({/*通过插件来配置全局jquery*/
            $: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery"
        })
    ]
}