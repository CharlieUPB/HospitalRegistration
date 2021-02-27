import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';
import { RegisterPatientFormConfig } from 'src/app/form-configs/patient.config';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent {

  patientModel: Patient = {
    name: '',
    address: '',
    birthdate: null,
    lastName: '',
    medicalAppointmentNotes: [],
    profilePicture: '',
    id: 0
  };
  
  patientConfig = RegisterPatientFormConfig;

  options: FormlyFormOptions = {};

  savePatient(patient: Patient) {
    console.log('I will save patient to DB: ', patient);
    this.options.resetModel();
  }

}
