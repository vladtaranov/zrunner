namespace zRunner {
  interface Controller {
    model: Model,
    view: View
  }

  interface Model {
    value: number
  }

  interface View {
    root: HTMLElement
  }

  type UserOptions = {
    value?: number
  }

  type Options = {
    value: number
  }

  type PublicMethods = {
    setValue: (value: number) => boolean,
    getValue: () => number
  }
}

export default zRunner;
