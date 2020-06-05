import Observer from './observer';

describe('Observer', () => {
  const observer: Observer = new Observer();
  const event: () => void = jest.fn();

  it('Subscribe new event', () => {
    const response: boolean = observer.subscribe(event);
    expect(response).toBeTruthy();
    expect(observer.observers.includes(event)).toBeTruthy();
  });

  it('Subscribe event, which has been already subscribed', () => {
    observer.subscribe(event);
    const response: boolean = observer.subscribe(event);
    expect(response).toBeFalsy();
    expect(observer.observers.includes(event)).toBeTruthy();
  });

  it('Unsubscribe event', () => {
    observer.subscribe(event);
    const response: boolean = observer.unsubscribe(event);
    expect(response).toBeTruthy();
    expect(observer.observers.includes(event)).toBeFalsy();
  });

  it('Unsubscribe event, which has been not subscribed', () => {
    const response: boolean = observer.unsubscribe(event);
    expect(response).toBeFalsy();
    expect(observer.observers.includes(event)).toBeFalsy();
  });
});
