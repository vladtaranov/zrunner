const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const GitRevisionWebpackPlugin = require('git-revision-webpack-plugin');
const PATHS = require('./paths');

module.exports = (env) => {
  const { mode = 'production' } = env;
  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';
  const currentVersion =
    JSON.stringify(new GitRevisionWebpackPlugin().version())
      .split('"')[1];

  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment && 'inline-source-map',
    entry: `./${PATHS.dev}/${PATHS.zRunner}/index.js`,
    output: {
      path: Path.join(process.cwd(), 'dist', PATHS.zRunner),
      filename: isProduction
        ? `${PATHS.zRunner}-${currentVersion}.js`
        : undefined
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
