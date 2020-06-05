interface Observer {
  observers: Function[]
}

class Observer {
  constructor () {
    this.observers = [];
  }

  subscribe (func: Function): boolean {
    if (!this.observers.includes(func)) {
      this.observers.push(func);
      return true;
    }
    return false;
  }

  unsubscribe (func: Function): boolean {
    const funcIdx: number = this.observers.indexOf(func);
    if (funcIdx >= 0) {
      this.observers.splice(funcIdx, 1);
      return true;
    }
    return false;
  }
}

export default Observer;
