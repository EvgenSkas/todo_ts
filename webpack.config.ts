const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TSLintPlugin = require("tslint-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html"
});

const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: "main.css",
  chunkFilename: "main.css"
});

const tsLintPlugin = new TSLintPlugin({
  files: ["./src/**/*.ts"]
});

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // only enable hot in development
              hmr: process.env.NODE_ENV === "development",
              // if hmr does not work, this is a forceful method.
              reloadAll: true
            }
          },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [htmlPlugin, cssExtractPlugin, tsLintPlugin]
};

// export default config;
