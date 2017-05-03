import { MatchPipe } from './match.pipe';

describe('Pipe: MatchPipe', () => {
  let pipe: MatchPipe;

  beforeEach(() => {
    pipe = new MatchPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should not do anything if not a string', () => {
    expect(pipe.transform(null, '')).toEqual(null);
    expect(pipe.transform(undefined, '')).toEqual(undefined);
    expect(pipe.transform(42, '')).toEqual(42);
    expect(pipe.transform({ name: 'foo' }, '')).toEqual({ name: 'foo' });
  });

  it('Should camelize properly', () => {
    expect(pipe.transform('foo 42', '[\\d]+$', 'g')).toEqual(['42']);
    expect(pipe.transform('42 foo', '[\\d]+$', 'g')).toEqual(null);
    expect(pipe.transform('foo', '[\\d]+$', 'g')).toEqual(null);
    expect(pipe.transform('FOO', '^foo')).toEqual(null);
    expect(pipe.transform('FOO', '^foo', 'i')).toBeTruthy(['FOO']);
  });
});
