import zRunner from '../../types/zRunnerTypes';
import makeInstance from './makeInstance';
import './style';

(function ($) {
  $.fn.zRunner = function (...args) {
    // MAKING INSTANCES OF zRUNNER
    if (typeof args[0] === 'object') {
      const userOptions: zRunner.UserOptions = args[0];
      return this.each((_idx: number, elem: HTMLElement) => {
        if ($(elem).data('zRunner')) return;
        $(elem).data('zRunner', makeInstance(elem, userOptions));
      });
    }

    if (typeof args[0] === 'string') {
      const methodName: string = args[0];

      // SETTERS
      if (typeof args[1] === 'string') {
        const value: zRunner.OptionsTypes = args[1];
        this.each((_idx: number, elem: HTMLElement) => {
          $(elem).data('zRunner')[methodName](value);
        });
        return this;
      }

      // GETTERS
      const results: zRunner.OptionsTypes[] = [];
      this.each((_idx: number, elem: HTMLElement) => {
        const result: zRunner.OptionsTypes = $(elem).data('zRunner')[methodName]();
        if (typeof result !== 'undefined') results.push(result);
      });

      if (results.length === 1) return results[0];
      if (results.length > 1) return results;
    }

    return this;
  };
})(window.JQuery);
