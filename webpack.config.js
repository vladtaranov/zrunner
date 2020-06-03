const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  dev: 'src',
  prod: 'dist',
  assets: 'assets'
};

module.exports = (env) => {
  const { mode = 'production' } = env;
  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';

  const getPlugins = () => {
    const plugins = [
      new CleanWebpackPlugin()
    ];

    if (isProduction) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: `./${PATHS.assets}/style/main-[hash:5].css`
        })
      );
    }

    return plugins;
  };

  const getStyleLoaders = () => {
    return [
      isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ];
  };

  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    entry: `./${PATHS.dev}/index.js`,
    output: {
      path: Path.join(__dirname, PATHS.prod),
      filename: isProduction
        ? `./${PATHS.assets}/js/main-[hash:5].js`
        : undefined,
      publicPath: '/toxin-runner/'
    },
    devServer: {
      contentBase: Path.join(__dirname, PATHS.dev),
      port: 9000,
      historyApiFallback: true,
      compress: true,
      open: true
    },
    plugins: getPlugins(),
    module: {
      rules: [

        // Loading JS
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },

        // Loading style
        {
          test: /\.(sass|scss)$/,
          use: getStyleLoaders()
        },

        // Loading images
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader',
          options: {
            outputPath: `${PATHS.assets}/images`,
            name: '[name]-[hash:5].[ext]'
          }
        },

        // Loading fonts
        {
          test: /\.(woff2|woff|ttf)$/,
          loader: 'file-loader',
          options: {
            outputPath: `${PATHS.assets}/fonts`,
            publicPath: isProduction
              ? '../fonts'
              : 'assets/fonts',
            name: '[name]-[hash:5].[ext]'
          }
        }
      ]
    }
  };
};
