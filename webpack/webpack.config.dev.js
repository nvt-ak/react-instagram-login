const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
    devtool: "eval",
    mode: "development",
});