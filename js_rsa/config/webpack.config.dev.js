const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode:"development",
  devtool:"eval-source-map",
  devServer:{
    open:true,
    inline:true,
    hot:true,
    port:8848,
    contentBase:path.resolve(__dirname,"../dist")
  },
  entry:{
    app:"./src/app.js"
  },
  output:{
    path:path.resolve(__dirname,"../dist"),
    filename:"[name].[hash].js"
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          "style-loader",
          "css-loader"
        ]
      },
      {
        test:/\.js$/,
        use:["babel-loader"]
      }
    ]
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"../src")
    },
    extensions:[".js"]
  },
  plugins:[
    new htmlWebpackPlugin({
      template:"./public/index.html",
      filename:"index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};