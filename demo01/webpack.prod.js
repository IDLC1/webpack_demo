'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptionsCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        // index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name]_[chunkhash:8].js',
        path: path.join(__dirname, 'dist'),
    },
    mode: 'production',
    module: {
        rules: [
            // test: 指定匹配规则
            // use: 指定使用的loaders名称
            { 
                test: /.js$/, 
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            // 使用file-loader
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]'
                        }
                    }
                ]
            }
            // 使用url-loader
            // {
            //     test: /.(png|jpg|gif|jpeg)$/,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             limit: 2048 // 图片小于2k 
            //         }
            //     }
            // },
            // {
            //     test: /.(woff|woff2|eot|ttf|otf)$/,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             limit: 2048 // 图片小于2k 
            //         }
            //     }
            // }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new OptionsCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/search.html"), // html模板所在位置
            filename: 'search.html', // 打包出来的名称
            chunks: ['search'], // 指定生成的html使用哪些chunk
            inject: true, // 打包后的css会自动注入
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html"), // html模板所在位置
            filename: 'index.html', // 打包出来的名称
            chunks: ['index'], // 指定生成的html使用哪些chunk
            inject: true, // 打包后的css会自动注入
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        })
    ]
}