const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
        filename: "instagram-login.js",
        libraryTarget: 'umd',
        library: 'InstagramLogin',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
        ]
    },
    externals: {
        react: 'react',
        'react-dom': 'ReactDOM'
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