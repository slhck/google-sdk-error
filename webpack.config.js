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
      {
        // For node binary relocations, include ".node" files as well here
        test: /\.(m?js|node)$/,
        // it is recommended for Node builds to turn off AMD support
        parser: { amd: false },
        use: {
          loader: "@zeit/webpack-asset-relocator-loader",
          options: {
            // optional, base folder for asset emission (eg assets/name.ext)
            outputAssetBase: "assets",
            // optional, restrict asset emissions to only the given folder.
            filterAssetBase: process.cwd(),
            // optional, permit entire __dirname emission
            // eg `const nonAnalyzable = __dirname` can emit everything in the folder
            emitDirnameAll: false,
            // optional, permit entire filterAssetBase emission
            // eg `const nonAnalyzable = process.cwd()` can emit everything in the cwd()
            emitFilterAssetBaseAll: false,
            // optional, a list of asset names already emitted or
            // defined that should not be emitted
            existingAssetNames: [],
            wrapperCompatibility: false, // optional, default
            // build for process.env.NODE_ENV = 'production'
            production: true, // optional, default is undefined
            cwd: process.cwd(), // optional, default
            debugLog: false, // optional, default
          },
        },
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
