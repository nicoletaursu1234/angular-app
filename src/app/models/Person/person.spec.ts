import { Person } from './person';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let person = new Person({
      name: 'Johnny',
      age: 31,
      email: 'johnny@gmail.com',
    });
    expect(person.name).toEqual('Johnny');
    expect(person.age).toEqual(31);
    expect(person.email).toEqual('johnny@gmail.com');
  });
});
