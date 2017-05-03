import { MaxPipe } from './max.pipe';

describe('Pipe: MaxPipe', () => {
  let pipe: MaxPipe;

  beforeEach(() => {
    pipe = new MaxPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should return max element from array', () => {
    expect(pipe.transform(1)).toEqual(1);
    expect(pipe.transform([1, 2, 3])).toEqual(3);
    expect(pipe.transform([5, 4, 3, 2, 1, 2, 3, 4, 5])).toEqual(5);
    expect(pipe.transform([5, 4, 3, 2, 1, 2, 3, 4, -5, 19])).toEqual(19);
  });
});
