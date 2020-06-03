const ghPages = require('gh-pages');
const PATHS = require('./webpackConfigs/paths');

const prodPath = `${PATHS.prod}/${PATHS.zRunner}`;
const options = {
  branch: 'release',
  repo: 'https://github.com/vladtaranov/zrunner.git',
  remote: 'zrunner'
};
const callback = (log) => {
  console.log(log);
};

ghPages.publish(prodPath, options, callback);
