import Observer from "../src/zrunner/observer/observer";

namespace zRunner {
  interface Controller {
    model: Model,
    view: View
  }

  interface Model extends Options {
    length: number,
    valueObserver: Observer
  }

  interface View {
    root: HTMLElement,
    track: HTMLElement,
    thumb: HTMLElement,
    thumbStart: HTMLElement,
    thumbEnd: HTMLElement,
    range: HTMLElement,
    thumbNote: HTMLElement,
    thumbStartNote: HTMLElement,
    thumbEndNote: HTMLElement,

    onValueChange: Observer,
    onStartThumbMove: Observer,
    onEndThumbMove: Observer
  }

  type UserOptions = {
    type?: string,
    min?: number,
    max?: number,
    step?: number,
    value?: number,
    isRange?: boolean,
    startValue?: number,
    endValue?: number,
    areValuesVisible?: boolean
  }

  type Options = {
    type: string,
    min: number,
    max: number,
    step: number,
    value: number,
    isRange: boolean,
    startValue: number,
    endValue: number,
    areValuesVisible: boolean
  }

  type OptionsTypes = string | number | boolean

  type PublicMethods = {
    setValue: (value: number) => boolean,

    getType: () => string,
    getMin: () => number,
    getMax: () => number,
    getStep: () => number,
    getValue: () => number,
    getIsRange: () => boolean,
    getStartValue: () => number,
    getEndValue: () => number,
    getAreValuesVisible: () => boolean,

    onValueChange: Event
  }

  interface Observer {
    observers: Event[],
    subscribe: (Event) => boolean,
    trigger: (Event) => boolean
  }

  type Event = (value?: number | string | boolean) => void;
}

export default zRunner;
