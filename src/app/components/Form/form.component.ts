import { Component, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/FormData/form-data.service';
import { Person } from 'src/app/models/Person/person';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormDataService],
})
export class FormComponent implements OnInit {
  constructor(private formDataService: FormDataService) { }

  newPerson: Person = new Person();

  addPerson() {
    this.formDataService.addPerson(this.newPerson);
  }

  get persons() {
    return this.formDataService.getAllPersons();
  }

  ngOnInit(): void {}

}
