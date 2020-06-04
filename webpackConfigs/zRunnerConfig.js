const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PATHS = require('./paths');

module.exports = (env) => {
  const { mode = 'production' } = env;
  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';

  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment && 'inline-source-map',
    entry: `./${PATHS.dev}/${PATHS.zRunner}/index.js`,
    output: {
      path: Path.join(process.cwd(), 'dist', PATHS.zRunner),
      filename: `${PATHS.zRunner}.js`
    },
    plugins: [
      new CleanWebpackPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    }
  };
};
