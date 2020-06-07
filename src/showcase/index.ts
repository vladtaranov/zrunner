import JQuery from 'jquery';
window.JQuery = JQuery;
window.$ = window.JQuery;

require('../zrunner/index.ts');

$('.js__runner-sample').zRunner({ value: 37 });
