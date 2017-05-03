import { RightTrimPipe } from './right-trim.pipe';

describe('Pipe: RightTrimPipe', () => {
  let pipe: RightTrimPipe;

  beforeEach(() => {
    pipe = new RightTrimPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should right trim whitespace from string', () => {
    const result = pipe.transform('   foo bar   ');
    expect(result).toEqual('   foo bar');
  });

  it('Should right trim other characters from string', () => {
    const result = pipe.transform('42foo bar42', '42');
    expect(result).toEqual('42foo bar');
  });
});
