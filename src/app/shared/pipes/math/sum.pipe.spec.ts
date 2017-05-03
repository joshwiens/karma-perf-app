import { SumPipe } from './sum.pipe';

describe('Pipe: SumPipe', () => {
  let pipe: SumPipe;

  beforeEach(() => {
    pipe = new SumPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should return value if not an array', () => {
    expect(pipe.transform({a: 1})).toEqual({a: 1});
    expect(pipe.transform(NaN)).toEqual(NaN);
  });

  it('Should return sum of element', () => {
    expect(pipe.transform([1, 2, 3, 4])).toEqual(10);
    expect(pipe.transform([5, 4, 3, 2, 1, -2, -3, -4, -5])).toEqual(1);
    expect(pipe.transform([1, 2, 3, 4, 4, 3, 2, 1, -10])).toEqual(10);
  });
});
