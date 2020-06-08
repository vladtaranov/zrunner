const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PATHS = require('./paths');

module.exports = () => {
  return {
    mode: 'production',
    entry: `./${PATHS.dev}/${PATHS.zRunner}/index.ts`,
    output: {
      path: Path.join(process.cwd(), 'dist', PATHS.zRunner),
      filename: 'zRunner.js'
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'zRunner.css'
      })
    ],
    module: {
      rules: [

        // Loading Typescript
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'ts-loader'
          ]
        },

        // Loading SCSS
        {
          test: /\.(scss|sass)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'resolve-url-loader',
            'sass-loader'
          ]
        }
      ]
    }
  };
};
