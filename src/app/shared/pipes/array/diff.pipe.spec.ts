import { DiffPipe } from './diff.pipe';

describe('Pipe: DiffPipe', () => {
  let pipe: DiffPipe;

  beforeEach(() => {
    pipe = new DiffPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the input if not an array', () => {
    expect(pipe.transform(true)).toEqual(true);
    expect(pipe.transform(113)).toEqual(113);
  });

  it('should not modify the array', () => {
    expect(pipe.transform([3, 2, 3])).toEqual([3, 2, 3]);
    expect(pipe.transform([])).toEqual([]);
  });

  it('should return a collection of array diffs', () => {
    expect(pipe.transform([4, 1], [])).toEqual([4, 1]);
    expect(pipe.transform([], [2, 3])).toEqual([]);
    expect(pipe.transform([4, 1, 3], [4, 3])).toEqual([1]);
    expect(pipe.transform([2, 6, 3], [1, 3], [2, 5])).toEqual([6]);
  });
});
