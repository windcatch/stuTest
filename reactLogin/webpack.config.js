/**
 * Created by catchWind on 2019/12/11.
 */
const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: "./app.js", // string | object | array
    // 这里应用程序开始执行
    // webpack 开始打包
    output: {
        // webpack 如何输出结果的相关选项

        path: path.resolve(__dirname, "dist"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）

        filename: "bundle.js", // string
    },
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 3000,
        hot: true
    },
    module: {
        // 关于模块配置
        rules: [
            // 模块规则（配置 loader、解析器等选项）
            {
                test: /\.(jsx|js)?$/,
                loader: "babel-loader",
                // 应该应用的 loader，它相对上下文解析
                // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
                // 查看 webpack 1 升级指南。
            },
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,  //这里要足够大这样所有的字体图标都会打包到css中
                    }
                }
            }, {
                test: /\.scss$/,
                //include: [path.resolve(__dirname, 'src')],   // 限制打包范围，提高打包速度
                exclude: /node_modules/,                     // 排除node_modules文件夹
                use: [
                    {
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: "css-loader"    // CSS加载器，使webpack可以识别css文件
                    },
                    {
                        loader: "postcss-loader"    //承载autoprefixer功能，为css添加前缀
                    },
                    {
                        loader: "sass-loader",       // 编译sass，webpack默认使用node-sass进行编译，所以需要同时安装 sass-loader 和 node-sass        
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery',
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html"),//指定模板页面
            filename: 'index.html'  //指定生成页面名称
        })
    ]
}