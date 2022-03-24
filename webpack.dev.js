const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "app"),
    assetModuleFilename: "images/[name][ext]",
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      title: "Ashion",
      template: "./Src/main.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
