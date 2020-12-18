import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormDataService } from 'src/app/FormData/form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormDataService],
})
export class FormComponent implements OnInit {
  constructor(private formDataService: FormDataService) { }

  personForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    age: new FormControl(null, [Validators.required, Validators.max(150)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(70)]),
  })

  addPerson() {
    this.formDataService.addPerson(this.personForm.value);
  }

  get persons() {
    return this.formDataService.getAllPersons();
  }

  ngOnInit(): void { }

}
