interface Observer {
  observers: Event[]
}

type Event = (value?: number | string | boolean) => void;

class Observer {
  constructor () {
    this.observers = [];
  }

  subscribe (event: Event): boolean {
    if (!this.observers.includes(event)) {
      this.observers.push(event);
      return true;
    }
    return false;
  }

  unsubscribe (event: Event): boolean {
    const funcIdx: number = this.observers.indexOf(event);
    if (funcIdx >= 0) {
      this.observers.splice(funcIdx, 1);
      return true;
    }
    return false;
  }

  trigger (data?: number | string | boolean): boolean {
    if (this.observers.length < 1) return false;
    this.observers.forEach((observer) => {
      observer(data);
    });
    return true;
  }
}

export default Observer;
