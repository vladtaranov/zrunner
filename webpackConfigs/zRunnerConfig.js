const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const GitRevisionWebpackPlugin = require('git-revision-webpack-plugin');
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
      filename: isProduction
        ? `${PATHS.zRunner}-[git-revision-version].js`
        : undefined
    },
    plugins: [
      new CleanWebpackPlugin(),
      new GitRevisionWebpackPlugin({
        lightweightTags: true
      })
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
