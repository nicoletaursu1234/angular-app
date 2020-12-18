export class Person {
  id: string;
  name: string ='';
  age: number = 0;
  email: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}