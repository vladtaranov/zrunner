import { boundMethod } from 'autobind-decorator';
import zRunner from '../../../types/zRunnerTypes';
import Observer from '../observer/observer';

class Model implements zRunner.Model {
  type: string;
  min: number;
  max: number;
  length: number;
  step: number;
  value: number;
  isRange: boolean;
  startValue: number;
  endValue: number;
  areValuesVisible: boolean;
  valueObserver: zRunner.Observer;

  constructor (options: zRunner.Options) {
    this.type = options.type;
    this.min = options.min;
    this.max = options.max;
    this.length = options.max - options.min;
    this.step = options.step;
    this.value = options.value;
    this.isRange = options.isRange;
    this.startValue = options.startValue;
    this.endValue = options.endValue;
    this.areValuesVisible = options.areValuesVisible;

    this.init();
  }

  @boundMethod
  setValue (value: number): boolean {
    if (value < 1) return false;
    const newValue: number = this.step * Math.round(value / this.step);
    this.value = newValue;
    this.valueObserver.trigger(newValue);
    return true;
  }

  @boundMethod
  public getType (): string {
    return this.type;
  }

  @boundMethod
  public getMin (): number {
    return this.min;
  }

  @boundMethod
  public getMax (): number {
    return this.max;
  }

  @boundMethod
  public getStep (): number {
    return this.step;
  }

  @boundMethod
  public getValue (): number {
    return this.value;
  }

  @boundMethod
  public getIsRange (): boolean {
    return this.isRange;
  }

  @boundMethod
  public getStartValue (): number {
    return this.startValue;
  }

  @boundMethod
  public getEndValue (): number {
    return this.endValue;
  }

  @boundMethod
  public getAreValuesVisible (): boolean {
    return this.areValuesVisible;
  }

  @boundMethod
  public getPublicMethods (): zRunner.PublicMethods {
    return {
      setValue: this.setValue,

      getType: this.getType,
      getMin: this.getMin,
      getMax: this.getMax,
      getStep: this.getStep,
      getValue: this.getValue,
      getIsRange: this.getIsRange,
      getStartValue: this.getStartValue,
      getEndValue: this.getEndValue,
      getAreValuesVisible: this.getAreValuesVisible,

      onValueChange: this.valueObserver.subscribe
    };
  }

  private init () {
    this.valueObserver = new Observer();
  }
}

export default Model;
