import { boundMethod } from 'autobind-decorator';
import zRunner from '../../../types/zRunnerTypes';
import Observer from '../observer/observer';

class Model implements zRunner.Model {
  type: string;
  min: number;
  max: number;
  step: number;
  value: number;
  isRange: boolean;
  startValue: number;
  endValue: number;
  isValuesVisible: boolean;
  valueObserver: zRunner.Observer;

  constructor (options: zRunner.Options) {
    this.type = options.type;
    this.min = options.min;
    this.max = options.max;
    this.step = options.step;
    this.value = options.value;
    this.isRange = options.isRange;
    this.startValue = options.startValue;
    this.endValue = options.endValue;
    this.isValuesVisible = options.isValuesVisible;

    this.valueObserver = new Observer();
  }

  @boundMethod
  setValue (value: number): boolean {
    if (value < 1) return false;
    this.value = value;
    this.valueObserver.trigger(value);
    return true;
  }

  @boundMethod
  getValue (): number {
    return this.value;
  }

  getPublicMethods (): zRunner.PublicMethods {
    return {
      setValue: this.setValue,
      getValue: this.getValue,
      onValueChange: this.valueObserver.subscribe
    };
  }
}

export default Model;
