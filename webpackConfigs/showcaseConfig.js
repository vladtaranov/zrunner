const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PATHS = require('./paths');

module.exports = (env) => {
  const { mode = 'production' } = env;
  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';

  const getPlugins = () => {
    const plugin = [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: `./${PATHS.dev}/${PATHS.showcase}/pug/main.pug`,
        favicon: `./${PATHS.dev}/${PATHS.showcase}/assets/favicon/favicon.png`
      })
    ];

    if (isProduction) {
      plugin.push(
        new MiniCssExtractPlugin({
          filename: `./${PATHS.assets}/style/style-[hash:5].css`
        })
      );
    }

    return plugin;
  };

  const getStyleLoaders = () => {
    return [
      isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      'cache-loader',
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
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    entry: `./${PATHS.dev}/${PATHS.showcase}/index.ts`,
    output: {
      path: Path.join(process.cwd(), 'dist', PATHS.showcase),
      filename: isProduction
        ? `./${PATHS.assets}/js/script-[hash:5].js`
        : undefined
    },
    devServer: {
      contentBase: Path.join(process.cwd(), PATHS.dev, PATHS.showcase),
      port: 9000,
      historyApiFallback: true,
      compress: true,
      open: true
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    plugins: getPlugins(),
    module: {
      rules: [

        // Loading Typescript
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            'cache-loader',
            'babel-loader',
            'ts-loader'
          ]
        },

        // Loading Pug
        {
          test: /\.pug$/,
          use: [
            'cache-loader',
            'html-loader',
            'pug-html-loader'
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
