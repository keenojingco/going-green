require('dotenv').config();
const HtmlWebPackPlugin = require("html-webpack-plugin");
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

module.exports = {
    devtool: 'inline-source-map',
    entry: ['babel-polyfill', './src'],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        host: HOST,
        port: PORT
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};
