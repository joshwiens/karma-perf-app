import { LeftTrimPipe } from './left-trim.pipe';

describe('Pipe: LeftTrimPipe', () => {
  let pipe: LeftTrimPipe;

  beforeEach(() => {
    pipe = new LeftTrimPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should left trim whitespace from string', () => {
    const result = pipe.transform('   foo bar   ');
    expect(result).toEqual('foo bar   ');
  });

  it('Should left trim other characters from string', () => {
    const result = pipe.transform('42foo bar42', '42');
    expect(result).toEqual('foo bar42');
  });
});
