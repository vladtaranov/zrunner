import zRunner from '../../types/zRunnerTypes';
import makeInstance from './makeInstance';

(function ($) {
  $.fn.zRunner = function (...args): JQuery {
    if (typeof args[0] === 'object') {
      const userOptions: zRunner.UserOptions = args[0];
      return this.each((_idx: number, elem: HTMLElement) => {
        $(elem).data('zRunner', makeInstance(elem, userOptions));
      });
    }

    return this;
  };
})(window.JQuery);
