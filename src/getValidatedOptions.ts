import zRunner from '../types/zRunnerTypes';
import constants from './zrunner/constants';

const defaultOptions = {
  type: constants.HORIZONTAL,
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  isRange: true,
  startValue: 20,
  endValue: 80,
  isValuesVisible: true
};

export default (userOptions: zRunner.UserOptions): zRunner.Options => {
  const getType = (type?: string): string => {
    if (type === constants.HORIZONTAL || type === constants.VERTICAL) return type;
    return defaultOptions.type;
  };

  const getMin = (
    min: number = defaultOptions.min,
    max: number = defaultOptions.max) => {
    if (min <= max) return min;
    if (max > min) return max;
  };

  return {
    type: getType(userOptions.type),
    min: getMin(userOptions.min, userOptions.max),
    max: 100,
    step: 1,
    value: 50,
    isRange: true,
    startValue: 20,
    endValue: 80,
    isValuesVisible: true
  };
};
