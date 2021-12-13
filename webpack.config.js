const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = "style-loader";

const config = {
  context: path.resolve(__dirname),
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  devServer: {
    open: true,
    hot: true,
    liveReload: true,
    host: "localhost",
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      inject: "head",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: "./", filter: (res) => !res.includes("html") }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
