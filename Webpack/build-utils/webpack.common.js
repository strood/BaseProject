// Common config holds config/plugins that are commoonly used across whole life of
// project
const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/',
  output: {
    filename: '[name].bundle.js',
    path: commonPaths.outputPath
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader:"file-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin()
  ]

};

module.exports = config;
