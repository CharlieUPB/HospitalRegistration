import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';
import { RegisterDoctorFormConfig } from 'src/app/configs/form-configs/doctor.config';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent {

  doctorModel: Doctor = {
    name: '',
    address: '',
    birthdate: null,
    lastName: '',
    medicalAppointmentNotes: [],
    profilePicture: '',
    specialities: [],
    id: 0
  };
  
  doctorConfig = RegisterDoctorFormConfig;

  options: FormlyFormOptions = {};

  saveDoctor(doctor: Doctor) {
    console.log('I will save doctor to DB: ', doctor);
    this.options.resetModel();
  }

}
