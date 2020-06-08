import JQuery from 'jquery';
import './scss';
import makePluginSample from './ts/makeSample';

window.JQuery = JQuery;
window.$ = window.JQuery;

require('../zrunner/index.ts');

const onDocumentLoaded = () => {
  makePluginSample(1, { value: 42 });
  makePluginSample(2, { value: 42 });
  makePluginSample(3, { value: 42 });
};

$(onDocumentLoaded);
