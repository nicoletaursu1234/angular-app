export class Person {
  id: string;
  name: string;
  age: number;
  email: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}