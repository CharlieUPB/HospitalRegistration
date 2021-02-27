import { Component } from '@angular/core';
import { DoctorGridConfig } from 'src/app/configs/grid-configs/doctor.grid.config';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent {

  columnsConfig = DoctorGridConfig;

  columnsData = [];

  deleteDoctor(id: number) {
    console.log('I will delete Doctor with Id' , id);
  }

  updateDoctor(id: number) {
    console.log('I will update Doctor with Id' , id);
  }

}
