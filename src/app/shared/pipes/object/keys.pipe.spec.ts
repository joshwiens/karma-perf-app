import { KeysPipe } from './keys.pipe';

describe('Pipe: KeysPipe', () => {
  let pipe: KeysPipe;

  beforeEach(() => {
    pipe = new KeysPipe();
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

  it('Should return array of keys', () => {
    expect(pipe.transform({})).toEqual([]);
    expect(pipe.transform({foo: 'bar'})).toEqual(['foo']);
    expect(pipe.transform({foo: 1, bar: 42})).toEqual(['foo', 'bar']);
  });
});
