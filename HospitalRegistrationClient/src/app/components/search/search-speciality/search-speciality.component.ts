import { Component, OnInit } from '@angular/core';
import { SpecialityGridConfig } from 'src/app/configs/grid-configs/speciality.grid.config';

@Component({
  selector: 'app-search-speciality',
  templateUrl: './search-speciality.component.html',
  styleUrls: ['./search-speciality.component.css']
})
export class SearchSpecialityComponent {

  columnsConfig = SpecialityGridConfig;

  columnsData = [];

  deleteSpeciality(id: number) {
    console.log('I will delete Speciality with Id' , id);
  }

  updateSpeciality(id: number) {
    console.log('I will update Speciality with Id' , id);
  }

}
