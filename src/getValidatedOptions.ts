// import zRunner from '../types/zRunnerTypes';
// import constants from './zrunner/constants';
// import defaultOptions from './defaultOptions';
//
// export default (userOptions: zRunner.UserOptions): zRunner.Options => {
//   const getType = (type?: string): string => {
//     if (type === constants.HORIZONTAL || type === constants.VERTICAL) return type;
//     return defaultOptions.type;
//   };
//
//   const getValidatedValues = (
//     min: number = defaultOptions.min,
//     max: number = defaultOptions.max,
//     step: number = defaultOptions.step,
//     value: number = defaultOptions.value,
//     startValue: number = defaultOptions.startValue,
//     endValue: number = defaultOptions.endValue) => {
//     let validatedMin: number;
//     let validatedMax: number;
//     let validatedStep: number;
//     let validatedValue: number;
//     let validatedStartValue: number;
//     let validatedEndValue: number;
//
//     if (min <= max) {
//       validatedMin = min;
//       validatedMax = max;
//     } else {
//       validatedMin = max;
//       validatedMax = min;
//     }
//
//     if (step <= (validatedMax - validatedMin)) {
//       validatedStep = step;
//     }
//
//
//     return {
//       min: validatedMin,
//       max: validatedMax,
//       step: validatedStep,
//       value: validatedValue,
//       startValue: validatedStartValue,
//       endValue: validatedEndValue
//     }
//   };
//
//   return {
//     type: getType(userOptions.type),
//     ...getValidatedValues(
//       userOptions.min,
//       userOptions.max,
//       userOptions.step,
//       userOptions.value,
//       userOptions.startValue,
//       userOptions.endValue),
//     isRange: userOptions.isRange || defaultOptions.isRange,
//     isValuesVisible: userOptions.isValuesVisible || defaultOptions.isValuesVisible
//   };
// };
