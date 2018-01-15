var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: "./public/app/App.js"
  },
  output: {
    filename: "public/build/bundle.js",
    sourceMapFilename: "public/build/bundle.map"
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  devtool: "#source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets:['react', 'es2015']
        }
      }
    ]
  }
}
