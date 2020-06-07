import zRunner from '../../../types/zRunnerTypes';

export default (id: number, options: zRunner.UserOptions): void => {
  $(`.js__zRunner-sample-${id}`).zRunner(options);
  console.log(`js__zRunner-sample-${id}`);
};
