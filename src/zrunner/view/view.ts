import zRunner from '../../../types/zRunnerTypes';

class View implements zRunner.View {
  root: HTMLElement;

  constructor (root: HTMLElement) {
    this.root = root;

    this.init();
  }

  private static makeElement (classes: string[]): HTMLElement {
    const elem: HTMLElement = document.createElement('div');
    classes.forEach((style) => {
      elem.classList.add(style);
    });
    return elem;
  }

  private init () {
    const track: HTMLElement = View.makeElement(['track']);
    this.root.append(track);
  }
}

export default View;
