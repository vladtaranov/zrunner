interface JQuery {
    zRunner(): JQuery
}

interface zRunnerOptions {
    type?: string
}

(function ($) {
  $.fn.zRunner = function (options?: zRunnerOptions) {
    console.log(options);
    return this.css('background', 'red');
  }
})($);
