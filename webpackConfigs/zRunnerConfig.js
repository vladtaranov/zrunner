const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PATHS = require('./paths');

module.exports = (env) => {
  const { mode = 'production' } = env;
  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';

  const getStyleLoaders = () => {
    return [
      isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'postcss-loader',
      'resolve-url-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }
    ];
  };

  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment && 'inline-source-map',
    entry: `./${PATHS.dev}/${PATHS.zRunner}/index.ts`,
    output: {
      path: Path.join(process.cwd(), 'dist', PATHS.zRunner),
      filename: 'zRunner.js'
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    plugins: [
      new CleanWebpackPlugin()
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
          use: getStyleLoaders()
        }
      ]
    }
  };
};
