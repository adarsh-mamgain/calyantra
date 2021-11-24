const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

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
          options: { presets: ['@babel/env','@babel/preset-react'] },
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
  devtool: "inline-source-map",
}