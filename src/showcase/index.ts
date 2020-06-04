import jQuery from 'jquery';
console.log('typescipt!!');

(<any>window).jQuery = jQuery;
(<any>window).$ = (<any>window).jQuery;
require('../zrunner/index.ts');

(<any>$('.js__runner-sample')).zRunner().css('color', 'yellow');
