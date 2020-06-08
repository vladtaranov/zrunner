import { boundMethod } from 'autobind-decorator';
import zRunner from '../../../types/zRunnerTypes';
import Observer from '../observer/observer';
import { makeElement, getValueInPercents } from '../utils';

class View implements zRunner.View {
  root: HTMLElement;
  track: HTMLElement;
  thumb: HTMLElement;
  thumbStart: HTMLElement;
  thumbEnd: HTMLElement;
  range: HTMLElement;
  thumbNote: HTMLElement;
  thumbStartNote: HTMLElement;
  thumbEndNote: HTMLElement;

  onValueChange: Observer;
  onStartThumbMove: Observer;
  onEndThumbMove: Observer;

  constructor (root: HTMLElement) {
    this.root = root;

    this.init();
  }

  @boundMethod
  public updateThumbsAndRange (options: zRunner.Options): void {
    if (options.isRange) {
      this.thumb.classList.add('is-invisible');
      this.thumbStart.classList.remove('is-invisible');
      this.thumbEnd.classList.remove('is-invisible');

      const startPosition: number =
        getValueInPercents(options.startValue, options.min, options.max);
      const endPosition: number =
        getValueInPercents(options.endValue, options.min, options.max);

      this.thumbStartNote.innerHTML = `${options.startValue}`;
      this.thumbEndNote.innerHTML = `${options.endValue}`;
      this.thumbStart.style.left = `${startPosition}%`;
      this.thumbEnd.style.left = `${endPosition}%`;
      this.range.style.left = `${startPosition}%`;
      this.range.style.width = `${endPosition - startPosition}%`;

      return;
    }

    this.thumb.classList.remove('is-invisible');
    this.thumbStart.classList.add('is-invisible');
    this.thumbEnd.classList.add('is-invisible');

    const position: number =
      getValueInPercents(options.value, options.min, options.max);

    this.thumbNote.innerHTML = `${options.value}`;
    this.thumb.style.left = `${position}%`;
    this.range.style.left = '0%';
    this.range.style.width = `${position}%`;
  }

  @boundMethod
  private onMouseDown (): void {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  @boundMethod
  private onMouseUp (): void {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  @boundMethod
  private onMouseMove (event: MouseEvent): void {
    const trackWidth: number = +this.track.offsetWidth;
    const eventPosition: number = event.pageX;
    const trackStartPosition: number = this.track.getBoundingClientRect().left;

    let newPosition: number = (eventPosition - trackStartPosition) / trackWidth * 100;
    if (newPosition < 0) newPosition = 0;
    if (newPosition > 100) newPosition = 100;

    this.onValueChange.trigger(newPosition);
  }

  private init (): void {
    this.track = makeElement(['zrunner__track']);
    this.thumb = makeElement(['zrunner__thumb']);
    this.thumbStart = makeElement(['zrunner__thumb']);
    this.thumbEnd = makeElement(['zrunner__thumb']);
    this.range = makeElement(['zrunner__range']);
    this.thumbNote = makeElement(['zrunner__thumb-note']);
    this.thumbStartNote = makeElement(['zrunner__thumb-note']);
    this.thumbEndNote = makeElement(['zrunner__thumb-note']);

    this.onValueChange = new Observer();
    this.onStartThumbMove = new Observer();
    this.onEndThumbMove = new Observer();

    this.thumb.addEventListener('mousedown', this.onMouseDown);
    this.thumbStart.addEventListener('mousedown', this.onMouseDown);
    this.thumbEnd.addEventListener('mousedown', this.onMouseDown);

    this.thumb.append(this.thumbNote);
    this.thumbStart.append(this.thumbStartNote);
    this.thumbEnd.append(this.thumbEndNote);

    this.root.append(this.track);
    this.track.append(
      this.thumb,
      this.thumbStart,
      this.thumbEnd,
      this.range);
  }
}

export default View;
