// Common Webpack Config

// Common file that is imported into prod and dev webpack files
// Contains common rules and plugins that are shared

const webpack = require("webpack");
const path = require("path");
const WebpackBar = require("webpackbar");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// process.cwd used to get root of web
const SRC_DIR = path.resolve(__dirname, "../src");
const OUT_DIR = path.resolve(__dirname, "../dist");

module.exports = {
  entry: path.resolve(SRC_DIR, "index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(OUT_DIR),
    publicPath: "/dist/",
    filename: "bundle.js"
  },

  plugins: [
    new WebpackBar(),
    // new HtmlWebpackPlugin({
    //   title: 'My App',
    //   template: 'public/index.html'
    // })
  ]
};
