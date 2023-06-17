const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname,'../demo/index.js'),
    devtool:'inline-source-map',
    resolve: {
        modules: ['node_modules', '../dist'] 
    },
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: 'instagram-login.js',
        pathinfo: true,
    },
    devServer: {
        static: path.join(__dirname, '../dist'),
        compress: true,
        port: 8080,
        historyApiFallback: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../demo/index.html'),
        }),
        new webpack.ProvidePlugin({
            "React": "react",
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    externals: {
        react: 'react',
        'react-dom': 'ReactDOM'
    },
};