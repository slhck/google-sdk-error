// eslint-disable-file @typescript-eslint/no-var-requires
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  mode: "production",
  node: {
    __dirname: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
};
