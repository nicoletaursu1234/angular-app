import { Injectable } from '@angular/core';
import { Person } from '../models/Person/person';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  constructor() { }

  persons: Person[] = [];

  addPerson(person: Person): FormDataService {
    if (!person.name || !person.age || !person.email) return;
    if (!person.id) {
      person.id = new Date().toString();
    }
    this.persons.push(person);

    return this;
  }

  getAllPersons(): Person[] {
    return this.persons;
  }
}
