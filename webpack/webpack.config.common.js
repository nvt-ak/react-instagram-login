const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
        filename: "instagram-login.js",
        libraryTarget: 'umd',
        library: 'InstagramLogin',
        umdNamedDefine: true
    },
    mode: process.env.NODE_ENV || "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
        ]
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    resolve: {
        alias: {
            '@types': path.resolve(__dirname, '../src/@types'),
            '@utils': path.resolve(__dirname, '../src/utils'),
            '@styles': path.resolve(__dirname, '../src/styles'),
        },
        extensions: [".ts", ".tsx", ".js"]
    }
};