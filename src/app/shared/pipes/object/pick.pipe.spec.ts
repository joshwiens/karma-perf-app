import { PickPipe } from './pick.pipe';

describe('Pipe: PickPipe', () => {
  let pipe: PickPipe;

  beforeEach(() => {
    pipe = new PickPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should not modify if its not an object', () => {
    expect(pipe.transform([1, 2, 3])).toEqual([1, 2, 3]);
    expect(pipe.transform([])).toEqual([]);
    expect(pipe.transform('foo')).toEqual('foo');
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
  });

  it('Should return picked object by args', () => {
    expect(pipe.transform({})).toEqual({});
    expect(pipe.transform({foo: 1})).toEqual({});
    expect(pipe.transform({a: 1, b: 2, c: 3}, 'a')).toEqual({a: 1});
    expect(pipe.transform({a: 1, b: 2, c: 3}, 'a', 'b')).toEqual({a: 1, b: 2});
    expect(pipe.transform({a: 1, b: 2, c: 3}, 'b', 'c')).toEqual({b: 2, c: 3});
    expect(pipe.transform({a: 1, b: 2, c: 3}, 'b')).toEqual({b: 2});
  });
});
