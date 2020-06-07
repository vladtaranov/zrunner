import zRunner from '../../types/zRunnerTypes';

import Controller from './controller/controller';
import defaultOptions from '../defaultOptions';

export default (root: HTMLElement, userOptions: zRunner.UserOptions): zRunner.PublicMethods => {
  const options: zRunner.Options = {
    ...defaultOptions(),
    ...userOptions
  };
  const controller: Controller = new Controller(root, options);

  return controller.getPublicMethods();
};
