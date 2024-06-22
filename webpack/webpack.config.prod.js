const { merge } = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
    mode: "production",
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          inline: false
        }
      })
    ]
});