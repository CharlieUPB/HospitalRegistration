import { Component, OnInit } from '@angular/core';
import { HospitalGridConfig } from 'src/app/configs/grid-configs/hospital.grid.config';

@Component({
  selector: 'app-search-hospital',
  templateUrl: './search-hospital.component.html',
  styleUrls: ['./search-hospital.component.css']
})
export class SearchHospitalComponent {


  columnsConfig = HospitalGridConfig;

  columnsData = [
    { id : 1, name : "Los Olivos", description : "Los Olivos" },
    { id : 2, name : "Belga", description : "El belga" },
    { id : 3, name : "Cordes", description : "El Cordes" },
    { id : 4, name : "Caja Bancaria", description : "La Caja Bancaria" },
  ];

  deleteHospital(id: number) {
    console.log('I will delete hospital with Id' , id);
  }

  updateHospital(id: number) {
    console.log('I will update hospital with Id' , id);
  }

}
