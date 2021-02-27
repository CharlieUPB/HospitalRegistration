import { Component, OnInit } from '@angular/core';
import { RegisterDoctorFormConfig } from 'src/app/form-configs/doctor.config';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  saveDoctor(doctor: Doctor) {
    console.log('I will save doctor to DB: ', doctor);
  }

}
