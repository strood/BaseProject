// Prod vars to be passed if we call for prod environment

const zlib = require('zlib');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const config = {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsWebpackPlugin({
        sourceMap: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new CompressionWebpackPlugin({
      filename: '[path][base].gz',
      test: /\.(js|html|css)$/,
      // threshold: 780, if not compressing, lower threshold to see in action
      threshold: 10240,
      minRatio: 0.8,
      algorithm: 'gzip',
    }),
  ],
};

module.exports = config;
