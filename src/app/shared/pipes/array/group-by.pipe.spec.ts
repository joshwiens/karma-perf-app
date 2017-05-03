import { GroupByPipe } from './group-by.pipe';

describe('Pipe: GroupByPipe', () => {
  let pipe: GroupByPipe;

  beforeEach(() => {
    pipe = new GroupByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not modify if not an array', () => {
    expect(pipe.transform('apple')).toEqual('apple');
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({ apple: 1, orange: 2 })).toEqual({ apple: 1, orange: 2 });
  });

  it('group by discriminator', () => {
    const arrayWithDiscriminator = [{ key: 'apple' }, { key: 'orange' }, { key: 'apple' }, { key: 'orange' }];
    const result = pipe.transform(arrayWithDiscriminator, 'key');
    expect(result).toEqual({
      apple: [{ key: 'apple' }, { key: 'apple' }],
      orange: [{ key: 'orange' }, { key: 'orange' }]
    });
  });

  it('allow function to be used as discriminator', () => {
    const arrayWithDiscriminator = [{ key: 'apple' }, { key: 'orange' }, { key: 'apple' }, { key: 'orange' }];
    const result = pipe.transform(arrayWithDiscriminator, (_: any) => _['key']);
    expect(result).toEqual({
      apple: [{ key: 'apple' }, { key: 'apple' }],
      orange: [{ key: 'orange' }, { key: 'orange' }]
    });
  });

  it('group by multiple discriminators with delimiter', () => {
    const arrayWithDiscriminator = [
      { id: 1, key: 'apple', type: 1 },
      { id: 2, key: 'apple', type: 2 },
      { id: 3, key: 'apple', type: 1 },
      { id: 4, key: 'apple', type: 2 }
    ];
    const result = pipe.transform(arrayWithDiscriminator, ['key', 'type'], '_');
    expect(result).toEqual({
      apple_1: [{ id: 1, key: 'apple', type: 1 }, { id: 3, key: 'apple', type: 1 }],
      apple_2: [{ id: 2, key: 'apple', type: 2 }, { id: 4, key: 'apple', type: 2 }]
    });
  });

  it('group by multiple discriminators', () => {
    const arrayWithDiscriminator = [
      { id: 1, key: 'apple', type: 1 },
      { id: 2, key: 'apple', type: 2 },
      { id: 3, key: 'apple', type: 1 },
      { id: 4, key: 'apple', type: 2 }
    ];
    const result = pipe.transform(arrayWithDiscriminator, ['key', 'type']);
    expect(result).toEqual({
      'apple|1': [{ id: 1, key: 'apple', type: 1 }, { id: 3, key: 'apple', type: 1 }],
      'apple|2': [{ id: 2, key: 'apple', type: 2 }, { id: 4, key: 'apple', type: 2 }]
    });
  });

  it('group by deep property discriminator', () => {
    const arrayWithDiscriminator = [
      { id: 1, prop: { deep: 'apple' } },
      { id: 2, prop: { deep: 'orange' } },
      { id: 3, prop: { deep: 'apple' } },
      { id: 4, prop: { deep: 'orange' } }
    ];
    const result = pipe.transform(arrayWithDiscriminator, 'prop.deep');
    expect(result).toEqual({
      apple: [{ id: 1, prop: { deep: 'apple' } }, { id: 3, prop: { deep: 'apple' } }],
      orange: [{ id: 2, prop: { deep: 'orange' } }, { id: 4, prop: { deep: 'orange' } }]
    });
  });

  it('group by multiple deep property discriminators', () => {
    const arrayWithDiscriminator = [
      { id: 1, prop: { deep: 'apple', type: 1 } },
      { id: 2, prop: { deep: 'apple', type: 2 } },
      { id: 3, prop: { deep: 'apple', type: 1 } },
      { id: 4, prop: { deep: 'apple', type: 2 } }
    ];
    const result = pipe.transform(arrayWithDiscriminator, ['prop.deep', 'prop.type']);
    expect(result).toEqual({
      'apple|1': [{ id: 1, prop: { deep: 'apple', type: 1 } }, { id: 3, prop: { deep: 'apple', type: 1 } }],
      'apple|2': [{ id: 2, prop: { deep: 'apple', type: 2 } }, { id: 4, prop: { deep: 'apple', type: 2 } }]
    });
  });
});
