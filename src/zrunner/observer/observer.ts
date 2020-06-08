import { boundMethod } from 'autobind-decorator';
import zRunner from '../../../types/zRunnerTypes';

class Observer implements zRunner.Observer {
  observers: zRunner.Event[];

  constructor () {
    this.observers = [];
  }

  @boundMethod
  subscribe (event: zRunner.Event): boolean {
    if (!this.observers.includes(event)) {
      this.observers.push(event);
      return true;
    }
    return false;
  }

  @boundMethod
  unsubscribe (event: zRunner.Event): boolean {
    const funcIdx: number = this.observers.indexOf(event);
    if (funcIdx >= 0) {
      this.observers.splice(funcIdx, 1);
      return true;
    }
    return false;
  }

  @boundMethod
  trigger (data?: number | string | boolean): boolean {
    if (this.observers.length < 1) return false;
    this.observers.forEach((observer) => {
      observer(data);
    });
    return true;
  }
}

export default Observer;
