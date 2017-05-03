import { ValuesPipe } from './values.pipe';

describe('Pipe: ValuesPipe', () => {
  let pipe: ValuesPipe;

  beforeEach(() => {
    pipe = new ValuesPipe();
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

  it('Should return array of values', () => {
    expect(pipe.transform({})).toEqual([]);
    expect(pipe.transform({foo: 'bar'})).toEqual(['bar']);
    expect(pipe.transform({foo: 1, bar: 42})).toEqual([1, 42]);
  });
});
