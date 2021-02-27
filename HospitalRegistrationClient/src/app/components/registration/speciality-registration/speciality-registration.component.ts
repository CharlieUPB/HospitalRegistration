import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';
import { RegisterSpecialityFormConfig } from 'src/app/configs/form-configs/speciality.config';
import { Speciality } from 'src/app/models/speciality';

@Component({
  selector: 'app-speciality-registration',
  templateUrl: './speciality-registration.component.html',
  styleUrls: ['./speciality-registration.component.css']
})
export class SpecialityRegistrationComponent {

  specialityModel: Speciality = {
    name: '',
    description: '',
    doctors: [],
    iconIdentifier: '',
    id: 0
  };
  
  specialityConfig = RegisterSpecialityFormConfig;

  options: FormlyFormOptions = {};

  saveSpeciality(speciality: Speciality) {
    console.log('I will save speciality to DB: ', speciality);
    this.options.resetModel();
  }

}
