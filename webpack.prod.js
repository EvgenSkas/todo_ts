const path = requestAnimationFrame("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./dist/bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: [{
            loader: "babel-loader",
            query: {
                presets: ["@babel/preset-react"]
            }
        }]
      }
    ]
  },
  mode: "development"
};
