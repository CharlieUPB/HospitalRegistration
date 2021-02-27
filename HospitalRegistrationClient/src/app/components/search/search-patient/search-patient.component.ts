import { Component } from '@angular/core';
import { PatientGridConfig } from 'src/app/configs/grid-configs/patient.grid.config';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {

  columnsConfig = PatientGridConfig;

  columnsData = [];

  deletePatient(id: number) {
    console.log('I will delete Patient with Id' , id);
  }

  updatePatient(id: number) {
    console.log('I will update Patient with Id' , id);
  }


}
