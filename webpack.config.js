const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['babel-polyfill','./src/scripts/index.js'],
    output: {
        path: path.resolve(__dirname,'public/scripts'),
        filename: 'bundle.js',
    },
    // plugins:[
    //     new MiniCssExtractPlugin({filename: "style.css"})
    // ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
        // ,{
        //     test: /\.scss$/,
        //     use: [
        //         MiniCssExtractPlugin.loader,
        //         'css-loader',
        //         'sass-loader'
        //     ]
        // }
    ]
    },
    devServer: {
        contentBase: path.resolve(__dirname,'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}