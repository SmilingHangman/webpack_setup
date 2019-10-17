var HTMLWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            { 
            test: /\.css$/,
            use: 
                [
                'style-loader',
                'css-loader',
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HTMLWebpackPlugin(),
        new CleanWebpackPlugin()
    ]
}