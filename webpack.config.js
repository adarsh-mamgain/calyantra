const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        }
      }
    ], 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve( __dirname, 'public/index.html'),
      filename: 'index.html',
    })
  ],
}
