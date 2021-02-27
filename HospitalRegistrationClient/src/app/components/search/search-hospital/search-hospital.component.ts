import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HospitalGridConfig } from 'src/app/configs/grid-configs/hospital.grid.config';
import { Hospital } from 'src/app/models/hospital';
import { HospitalService } from 'src/app/services/hospital/hospital.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-search-hospital',
  templateUrl: './search-hospital.component.html',
  styleUrls: ['./search-hospital.component.css']
})
export class SearchHospitalComponent implements OnInit {

  columnsConfig = HospitalGridConfig;

  columnsData: any;

  constructor(private router: Router, private service: HospitalService, private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.columnsData = this.service.getHospitals();
  }

  deleteHospital(data: Hospital) {
    this.service.deleteHospital(data.id).subscribe((res) => {
      console.log(res);
      this.snackbarService.showMessage('Hospital Successfully Deleted', 'Close');
      this.columnsData = this.service.getHospitals();
    });
  }

  updateHospital(data: Hospital) {
    this.router.navigate([`/hospitals/${data.id}`]);
  }

}
