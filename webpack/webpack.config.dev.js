const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.config.common");
const webpack = require('webpack');

module.exports = merge(commonConfig, {
    devtool: "eval",
    mode: "development",
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          inline: false
        }
      })
    ]
});