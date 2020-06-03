const zRunnerConfig = require('./webpackConfigs/zRunnerConfig');
const showcaseConfig = require('./webpackConfigs/showcaseConfig');

module.exports = (env = {}) => {
  return [
    zRunnerConfig(env),
    showcaseConfig(env)
  ];
};
