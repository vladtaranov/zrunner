interface JQuery {
    zRunner(): JQuery
}

interface zRunnerOptions {
  min: number,
  max: number,
  step: number
}

(function ($) {
  $.fn.zRunner = function (options?: zRunnerOptions) {
    console.log(options);
    return this.css('background', 'red');
  }
})($);
