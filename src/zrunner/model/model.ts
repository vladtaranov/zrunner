interface Model {
  min: number,
  max: number,
  step: number
}

class Model {
  constructor (options: zRunnerOptions) {
    this.min = options.min;
    this.max = options.max;
    this.step = options.step;
  }

  setStep (step: number): boolean {
    if (step < 1) return false;
    this.step = step;
    return true;
  }

  getStep (): number {
    return this.step;
  }
}

export default Model;
