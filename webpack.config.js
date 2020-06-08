const showcaseConfig = require('./webpackConfigs/showcaseConfig');
const zRunnerConfig = require('./webpackConfigs/zRunnerConfig');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;

  switch (mode) {
    case 'development':
      return showcaseConfig('development');
    case 'buildShowcase':
      return showcaseConfig('production');
    case 'release':
      return zRunnerConfig();
  }
};
