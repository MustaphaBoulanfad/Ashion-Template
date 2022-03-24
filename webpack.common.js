module.exports = {
  entry: "./Src/Js/main.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "Images/[name]-[contenthash].[ext]",
        },
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name]-[hash][ext][query]",
        },
      },
    ],
  },
};
