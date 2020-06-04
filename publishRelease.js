const ghPages = require('gh-pages');
const PATHS = require('./webpackConfigs/paths');

const prodPath = `${PATHS.prod}/${PATHS.zRunner}`;
const options = {
  branch: 'release',
  remote: 'zrunner'
};
const callback = (log) => {
  log && console.log(log);
};

ghPages.publish(prodPath, options, callback);
