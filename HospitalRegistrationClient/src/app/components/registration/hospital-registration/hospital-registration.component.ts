import { Component } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';
import { RegisterHospitalFormConfig } from 'src/app/form-configs/hospital.config';
import { Hospital } from 'src/app/models/hospital';

@Component({
  selector: 'app-hospital-registration',
  templateUrl: './hospital-registration.component.html',
  styleUrls: ['./hospital-registration.component.css']
})
export class HospitalRegistrationComponent {

  hospitalModel: Hospital = {
    name: '',
    id: 0,
    description: ''
  };
  
  hospitalConfig = RegisterHospitalFormConfig;

  options: FormlyFormOptions = {};

  saveHospital(hospital: Hospital) {
    console.log('I will save hospital to DB: ', hospital);
    this.options.resetModel();
  }
  
}
