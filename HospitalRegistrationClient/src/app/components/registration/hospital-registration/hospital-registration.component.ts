import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormlyFormOptions } from '@ngx-formly/core';
import { RegisterHospitalFormConfig } from 'src/app/configs/form-configs/hospital.config';
import { Hospital } from 'src/app/models/hospital';
import { HospitalService } from 'src/app/services/hospital/hospital.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-hospital-registration',
  templateUrl: './hospital-registration.component.html',
  styleUrls: ['./hospital-registration.component.css']
})
export class HospitalRegistrationComponent implements OnInit {

  hospitalModel: Hospital = {
    id: -1,
    name: '',
    description: ''
  };
  hospitalConfig = RegisterHospitalFormConfig;
  options: FormlyFormOptions = {};
  currentID;
  title: string;
  subtitle: string;

  constructor(private route: ActivatedRoute, private service: HospitalService, private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentID= +params.get('id');
      if (this.currentID) {
        this.title = `Update the Hospital with ID ${this.currentID}`;
        this.subtitle = `Please enter all the required fields to update the Hospital with ID ${this.currentID}`
        this.service.getHospitalById(this.currentID).subscribe((res) => {
          this.hospitalModel = res;
        });
      } else {
        this.title = "Register a new Hospital";
        this.subtitle = "Please enter all the required fields to register a new Hospital";
      }
    });
  }
 

  saveHospital(hospital: Hospital) {
    if(this.currentID) {
      this.service.updateHospital(hospital, this.currentID).subscribe((res) => {
        this.snackbarService.showMessage('Hospital Successfully Updated', 'Close');
      });
    } else {
      this.service.createHospital(hospital).subscribe((res) => {
        this.snackbarService.showMessage('Hospital Successfully Created', 'Close');
        this.hospitalModel = {} as any;
      });
    }
  }
  
}
