const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = require('./paths');

module.exports = (env) => {
  const { mode = 'production' } = env;
  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';

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
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: `./${PATHS.dev}/${PATHS.showcase}/index.pug`
      })
    ],
    module: {
      rules: [

        // Loading Pug
        {
          test: /\.pug$/,
          use: [
            'html-loader',
            'pug-html-loader'
          ]
        },

        // Loading Typescript
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'ts-loader'
          ]
        }
      ]
    }
  };
};
