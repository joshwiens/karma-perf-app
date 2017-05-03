import { PercentPipe } from './percent.pipe';

describe('Pipe: PercentPipe', () => {
  let pipe: PercentPipe;

  beforeEach(() => {
    pipe = new PercentPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should not change anything if not a number', () => {
    expect(pipe.transform('foo')).toEqual('foo');
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform([1, 2, 3])).toEqual([1, 2, 3]);
    expect(pipe.transform({foo: 1, bar: 2})).toEqual({foo: 1, bar: 2});
  });

  it('Should return percent between numbers', () => {
    expect(pipe.transform(5)).toEqual(5);
    expect(pipe.transform(5, 160)).toEqual(3.125);
    expect(pipe.transform(5, 160, true)).toEqual(3);
  });

});
