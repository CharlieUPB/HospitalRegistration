import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormlyFormOptions } from '@ngx-formly/core';
import { RegisterSpecialityFormConfig } from 'src/app/configs/form-configs/speciality.config';
import { Speciality } from 'src/app/models/speciality';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { SpecialityService } from 'src/app/services/speciality/speciality.service';

@Component({
  selector: 'app-speciality-registration',
  templateUrl: './speciality-registration.component.html',
  styleUrls: ['./speciality-registration.component.css']
})
export class SpecialityRegistrationComponent implements OnInit {

  specialityModel: Speciality = {
    id: -1,
    name: '',
    description: '',
    doctors: [],
    iconIdentifier: ''
  };
  specialityConfig = RegisterSpecialityFormConfig;
  options: FormlyFormOptions = {};
  currentID;
  title: string;
  subtitle: string;

  constructor(private route: ActivatedRoute, private service: SpecialityService, private snackbarService: SnackbarService) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentID= +params.get('id');
      if (this.currentID) {
        this.title = `Update the Medical Speciality with ID ${this.currentID}`;
        this.subtitle = `Please enter all the required fields to update the Medical Speciality with ID ${this.currentID}`
        this.service.getSpecialityById(this.currentID).subscribe((res) => {
          this.specialityModel = res;
        });
      } else {
        this.title = "Register a new Medical Speciality";
        this.subtitle = "Please enter all the required fields to register a new medical speciality";
      }
    });
  }

  saveSpeciality(speciality: Speciality) {
    if(this.currentID) {
      this.service.updateSpeciality(speciality, this.currentID).subscribe((res) => {
        this.snackbarService.showMessage('Speciality Successfully Updated', 'Close');
      });
    } else {
      this.service.createSpeciality(speciality).subscribe((res) => {
        this.snackbarService.showMessage('Speciality Successfully Created', 'Close');
        this.specialityModel = {} as any;
      });
    }
  }

}
