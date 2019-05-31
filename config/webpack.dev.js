const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const common = require("./webpack.common.js");

// process.cwd used to get root of web
const SRC_DIR = path.resolve(__dirname, "../src");
const OUT_DIR = path.resolve(__dirname, "../dist");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    open: true,
    overlay: true,
    stats: "normal",
    clientLogLevel: "error",
    host: "localhost",
    port: 3000,
    historyApiFallback: true,

    contentBase: path.join(SRC_DIR, "../public/"),
    // port: 3000,
    // publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|svg|ico|gif|png)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
