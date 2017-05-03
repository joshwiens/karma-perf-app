import { FilterByPipe } from './filter-by.pipe';

describe('Pipe: FilterByPipe', () => {
  let pipe: FilterByPipe;

  const data = [
    { emp_id: 1, name: 'John', surname: 'Doe', employment: { title: 'Engineer', employer: 'The Interwebz', previous_employer: 'Unknown' }, employment_status: true, prop: 1 },
    { emp_id: 2, name: 'Jane', surname: 'West', employment: { title: 'Designer', employer: 'The casa', previous_employer: 'Unknown' }, employment_status: false },
    { emp_id: 3, name: 'Bruce', surname: 'John', employment: { title: 'Engineer', employer: 'Dream Land', previous_employer: 'Unknown' }, employment_status: true },
    { emp_id: 4, name: 'William', surname: 'Cent', employment: { title: 'Designer', employer: 'The Interwebz', previous_employer: 'Dream Land' }, employment_status: false }
  ];

  beforeEach(() => {
    pipe = new FilterByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not modify if not an array', () => {
    expect(pipe.transform('foo', [''], '')).toEqual('foo');
    expect(pipe.transform(null, [''], '')).toEqual(null);
    expect(pipe.transform(undefined, [''], '')).toEqual(undefined);
    expect(pipe.transform(42, [''], '')).toEqual(42);
    expect(pipe.transform({foo: 1, bar: 2}, [''], '')).toEqual({foo: 1, bar: 2});
  });

  it('should filter by single field with no value', () => {
    const filtered = pipe.transform(data, ['prop']);

    expect(filtered.length).toEqual(1);
    expect(filtered[0]).toEqual(data[0]);
  });

  it('should filter by single field with a single result', () => {
    const filtered = pipe.transform(data, ['emp_id'], 1);

    expect(filtered.length).toEqual(1);
    expect(filtered[0]).toEqual(data[0]);
  });

  it('should filter by boolean value', () => {
    const filtered = pipe.transform(data, ['employment_status'], true);

    expect(filtered.length).toEqual(2);
    expect(filtered[0]).toEqual(data[0]);
    expect(filtered[1]).toEqual(data[2]);
  });

  it('should filter by multiple fields with a two result', () => {
    const filtered = pipe.transform(data, ['name', 'surname'], 'John');

    expect(filtered.length).toEqual(2);
    expect(filtered[0]).toEqual(data[0]);
    expect(filtered[1]).toEqual(data[2]);
  });

  it('should filter by nested field with a single result', () => {
    const filtered = pipe.transform(data, ['employment.employer'], 'Land');

    expect(filtered.length).toEqual(1);
    expect(filtered[0]).toEqual(data[2]);
  });

  it('should filter by nested field with a multiple result', () => {
    const filtered = pipe.transform(data, ['employment.title'], 'Designer');

    expect(filtered.length).toEqual(2);
    expect(filtered[0]).toEqual(data[1]);
    expect(filtered[1]).toEqual(data[3]);
  });

  it('should filter by multiple nested field with a multiple result', () => {
    const filtered = pipe.transform(data, ['employment.employer', 'employment.previous_employer'], 'Dream Land');

    expect(filtered.length).toEqual(2);
    expect(filtered[0]).toEqual(data[2]);
    expect(filtered[1]).toEqual(data[3]);
  });

  it('should filter by field with strict flag enabled', () => {
    const filtered = pipe.transform(data, ['employment.employer'], 'casa', true);

    expect(filtered.length).toEqual(0);
  });
});
