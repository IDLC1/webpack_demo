'use strict';

const path = require('path')

module.exports = {
    entry: {
        // index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
    mode: 'development',
    // 开启监听事件
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000
    },
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
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            // 使用file-loader
            // {
            //     test: /.(png|jpg|gif|jpeg)$/,
            //     use: 'file-loader'
            // },
            // {
            //     test: /.(woff|woff2|eot|ttf|otf)$/,
            //     use: 'file-loader'
            // }
            // 使用url-loader
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 2048 // 图片小于2k 
                    }
                }
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 2048 // 图片小于2k 
                    }
                }
            }
        ]
    },
    plugins: [
    ]
}