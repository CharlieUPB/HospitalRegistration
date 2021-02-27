import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormlyFormOptions } from '@ngx-formly/core';
import { RegisterPatientFormConfig } from 'src/app/configs/form-configs/patient.config';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient/patient.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  patientModel: Patient = {
    id: -1,
    name: '',
    address: '',
    birthdate: null,
    lastName: '',
    medicalAppointmentNotes: [],
    profilePicture: ''
  };
  patientConfig = RegisterPatientFormConfig;
  options: FormlyFormOptions = {};
  currentID;
  title: string;
  subtitle: string;

  constructor(private route: ActivatedRoute, private service: PatientService, private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentID= +params.get('id');
      if (this.currentID) {
        this.title = `Update the Patient with ID ${this.currentID}`;
        this.subtitle = `Please enter all the required fields to update the Patient with ID ${this.currentID}`
        this.service.getPatientById(this.currentID).subscribe((res) => {
          this.patientModel = res;
        });
      } else {
        this.title = "Register a new Patient";
        this.subtitle = "Please enter all the required fields to register a new patient";
      }
    });
  }

  savePatient(patient: Patient) {
    if(this.currentID) {
      this.service.updatePatient(patient, this.currentID).subscribe((res) => {
        this.snackbarService.showMessage('Patient Successfully Updated', 'Close');
      });
    } else {
      this.service.createPatient(patient).subscribe((res) => {
        this.snackbarService.showMessage('Patient Successfully Created', 'Close');
        this.patientModel = {} as any;
      });
    }
  }

}
