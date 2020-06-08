import JQuery from 'jquery';
import './scss';
import makeSample from './ts/makeSample';

window.JQuery = JQuery;
window.$ = window.JQuery;

require('../zrunner/index.ts');

const onDocumentLoaded = () => {
  makeSample(1, { value: 42 });
  makeSample(2, { value: 42 });
  makeSample(3, { value: 42 });
};

$(onDocumentLoaded);
