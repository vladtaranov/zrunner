import zRunner from '../../../types/zRunnerTypes';
import Model from '../model/model';
import View from '../view/view';

class Controller implements zRunner.Controller {
  model: Model;
  view: View;

  constructor (root: HTMLElement, options: zRunner.Options) {
    this.model = new Model(options);
    this.view = new View(root);
  }

  getPublicMethods (): zRunner.PublicMethods {
    return this.model.getPublicMethods();
  }
}

export default Controller;
