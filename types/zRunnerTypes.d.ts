namespace zRunner {
  interface Controller {
    model: Model,
    view: View
  }

  interface Model extends Options {
    valueObserver: Observer
  }

  interface View {
    root: HTMLElement
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
    getValue: () => number,
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
