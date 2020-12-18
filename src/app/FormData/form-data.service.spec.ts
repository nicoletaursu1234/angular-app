import { TestBed, inject, async } from '@angular/core/testing';
import { Person } from '../models/Person/person';

import { FormDataService } from './form-data.service';

describe('FormDataService', () => {
  let service: FormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllPersons()', () => {
    it('should return empty array of persons', () => {
      expect(service.getAllPersons()).toEqual([])
    })

    it('should return all persons', () => {
      const person1 = new Person({name: 'Johnny', age: 31, email: 'johnny@gmail.com'});
      const person2 = new Person({name: 'Cupcake', age: 2, email: 'cupcake@bark.com'});

      service.addPerson(person1);
      service.addPerson(person2);
      
      expect(service.getAllPersons()).toEqual([person1, person2]);
    });

    it('should not add person', () => {
      const person1 = new Person({name: 'Baraka', age: 400});

      service.addPerson(person1);

      expect(service.getAllPersons()).toEqual([]);
    })
  });

});
