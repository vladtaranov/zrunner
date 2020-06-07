import zRunner from '../../../types/zRunnerTypes';

class Model implements zRunner.Model {
  value: number;

  constructor (options: zRunner.Options) {
    this.value = options.value;
  }

  setValue (value: number): boolean {
    if (value < 1) return false;
    this.value = value;
    return true;
  }

  getValue (): number {
    return this.value;
  }

  getPublicMethods (): zRunner.PublicMethods {
    return {
      setValue: this.setValue,
      getValue: this.getValue
    };
  }
}

export default Model;
