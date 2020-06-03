const showcaseConfig = require('./webpackConfigs/showcaseConfig');
const zRunnerConfig = require('./webpackConfigs/zRunnerConfig');

module.exports = (env = {}) => {
  return [
    showcaseConfig(env),
    zRunnerConfig(env)
  ];
};
