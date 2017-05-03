import { FilterWithPipe } from './filter-with.pipe';

describe('Pipe: FilterWithPipe', () => {
  let pipe: FilterWithPipe;

  beforeEach(() => {
    pipe = new FilterWithPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filters with an array of strings', () => {
    expect(pipe.transform(['a', 'b', 'c'], 'a')).toEqual(['a']);
  });

  it('filters with an array of strings without any match', () => {
    expect(pipe.transform(['a', 'b', 'c'], 'x')).toEqual([]);
  });

  it('filters with an array of strings with repeated element', () => {
    const arrayContainingA = ['a', 'ba', 'ca'];
    expect(pipe.transform(arrayContainingA, 'a')).toEqual(arrayContainingA);
  });

  it('filters with an array of numbers', () => {
    expect(pipe.transform([1, 2, 3, 11], 1)).toEqual([1]);
  });

  it('filters with an array of objects', () => {
    expect(pipe.transform([
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 111 }
    ], { value: 1 })).toEqual([{ value: 1 }]);

    expect(pipe.transform([
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
      { value: 'abc' }
    ], { value: 'a' })).toEqual([{ value: 'a' }, { value: 'abc' }]);
  });

  it('filters an array of objects with nested objects', () => {
    expect(pipe.transform([
      { value: 'a', nested: { number: 1 } },
      { value: 'b', nested: { number: 2 } },
      { value: 'c', nested: { number: 1 } },
      { value: 'abc', nested: { number: 2 } }
    ], { value: 'a', nested: { number: 2 } }))
      .toEqual([{ value: 'abc', nested: { number: 2 } }]);
  });

  it('filters an array of objects with nested objects (not every object has nested object)', () => {
    expect(pipe.transform([
      { value: 'a' },
      { value: 'b', nested: { number: 1 } },
      { value: 'c', nested: { number: 1 } },
      { value: 'abc' }
    ], { value: 'a', nested: { number: 1 } }))
      .toEqual([]);
  });

  it('filters an array of objects with empty array', () => {
    const objects = [
      {
        value: 'a'
      }
    ];
    expect(pipe.transform(objects, [])).toEqual(objects);
  });
});
