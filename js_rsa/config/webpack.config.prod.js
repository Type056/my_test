const path = require("path");
const webpack = require("webpack");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode:"production",
  devtool:"eval-source-map",
  entry:{
    app:"./src/app.js"
  },
  output:{
    filename:"static/script/[name].[hash].js",
    path:path.resolve(__dirname,"../dist")
  },
  module:{
    rules:[
      {
        test:/\.css/,
        use:[miniCssExtractPlugin.loader,"css-loader"]
      },
      {
        test:/\.js$/,
        use:["babel-loader"]
      }
    ]
  },
  optimization:{
    splitChunks:{
      chunks:"initial",
      automaticNameDelimiter:"-",
      name:false,
      cacheGroups:{
        vendor:{
          test:/node_modules\//,
          name:"vendor"
        }
      }
  },
  },
  plugins:[
    new cleanWebpackPlugin(
      ["dist"],
      {
        root:path.resolve(__dirname,"../")
      }
    ),
    new htmlWebpackPlugin({
      template:"./public/index.html",
      filename:"index.html"
    }),
    new miniCssExtractPlugin({
      filename:"./static/style/[name].[hash].css"
    })
  ]
};