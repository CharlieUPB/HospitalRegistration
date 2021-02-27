import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormlyFormOptions } from '@ngx-formly/core';
import { RegisterDoctorFormConfig } from 'src/app/configs/form-configs/doctor.config';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { SpecialityService } from 'src/app/services/speciality/speciality.service';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {

  doctorModel: Doctor = {
    id: -1,
    name: '',
    address: '',
    birthdate: null,
    lastName: '',
    medicalAppointmentNotes: [],
    profilePicture: '',
    specialities: [],
  };
  doctorConfig = RegisterDoctorFormConfig;
  options: FormlyFormOptions = {};
  currentID;
  title: string;
  subtitle: string;

  constructor(private route: ActivatedRoute, private service: DoctorService, private specialityService: SpecialityService, private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.specialityService.getSpecialities().subscribe((res) => {
      if (res) {
        const medicalSpecialities = this.doctorConfig[this.doctorConfig.length -1];
        const loadedSpecialities = [];
        for(let i=0; i<res.length; i++) {
          loadedSpecialities.push({
            value: res[i],
            label: res[i].name
          });
        }
        medicalSpecialities.templateOptions.options = loadedSpecialities;
      }
    });
    this.route.paramMap.subscribe(params => {
      this.currentID= +params.get('id');
      if (this.currentID) {
        this.title = `Update the Doctor with ID ${this.currentID}`;
        this.subtitle = `Please enter all the required fields to update the Doctor with ID ${this.currentID}`
        this.service.getDoctorById(this.currentID).subscribe((res) => {
          this.doctorModel = res;
        });
      } else {
        this.title =  "Register a new Doctor";
        this.subtitle = "Please enter all the required fields to register a new Doctor";
      }
    });    
  }

  saveDoctor(doctor: Doctor) {
    if(this.currentID) {
      this.service.updateDoctor(doctor, this.currentID).subscribe((res) => {
        this.snackbarService.showMessage('Doctor Successfully Updated', 'Close');
      });
    } else {
      this.service.createDoctor(doctor).subscribe((res) => {
        this.snackbarService.showMessage('Doctor Successfully Created', 'Close');
        this.doctorModel = {} as any;
      });
    }
  }

}
