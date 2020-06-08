import { boundMethod } from 'autobind-decorator';
import zRunner from '../../../types/zRunnerTypes';
import Model from '../model/model';
import View from '../view/view';
import { getValueFromPercents } from '../utils';

class Controller implements zRunner.Controller {
  model: Model;
  view: View;

  constructor (root: HTMLElement, options: zRunner.Options) {
    this.model = new Model(options);
    this.view = new View(root);

    this.view.updateThumbsAndRange(options);

    this.view.onValueChange
      .subscribe(this.emitPositionUpdate);
  }

  @boundMethod
  private emitPositionUpdate (newPosition: number): void {
    const newValue: number =
      getValueFromPercents(newPosition, this.model.getMin(), this.model.getMax());
    this.model.setValue(newValue);

    this.view.updateThumbsAndRange({
      type: this.model.getType(),
      min: this.model.getMin(),
      max: this.model.getMax(),
      step: this.model.getStep(),
      value: this.model.getValue(),
      isRange: this.model.getIsRange(),
      startValue: this.model.getStartValue(),
      endValue: this.model.getEndValue(),
      areValuesVisible: this.model.getAreValuesVisible()
    });
  }

  @boundMethod
  public getPublicMethods (): zRunner.PublicMethods {
    return this.model.getPublicMethods();
  }
}

export default Controller;
