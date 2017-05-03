import { ReversePipe } from './reverse.pipe';

describe('Pipe: ReversePipe', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should not do anything when not an array or string', () => {
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({ foo: 1, bar: 2 })).toEqual({ foo: 1, bar: 2 });
  });

  it('Should reverse array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = pipe.transform(array);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });

  it('Should reverse array of objects', () => {
    const fooObj = { id: 1, name: 'foo' };
    const barObj = { id: 2, name: 'bar' };
    const cazObj = { id: 3, name: 'caz' };

    const array = [ fooObj, barObj, cazObj ];
    const result = pipe.transform(array);
    expect(result).toEqual([
      cazObj, barObj, fooObj
    ]);
  });

  it('Should reverse string', () => {
    const string = 'lorem ipsum';
    const result = pipe.transform(string);
    expect(result).toEqual('muspi merol');
  });
});
