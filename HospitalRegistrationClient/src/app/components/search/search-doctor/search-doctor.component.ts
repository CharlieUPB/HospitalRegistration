import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorGridConfig } from 'src/app/configs/grid-configs/doctor.grid.config';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {

  columnsConfig = DoctorGridConfig;

  columnsData: any;

  constructor(private router: Router, private service: DoctorService, private snackbarService: SnackbarService) {}

  ngOnInit(): void {
   this.loadDoctors();
  }

  loadDoctors() {
    this.service.getDoctors().subscribe((res) => {
      for (let i=0; i<res.length; i++) {
        res[i].specialities = res[i].specialities.map(speciality => speciality.name) as any;
      }
      this.columnsData = res;
    });
  }

  deleteDoctor(data: Doctor) {
    this.service.deleteDoctor(data.id).subscribe((res) => {
      this.snackbarService.showMessage('Doctor Successfully Deleted', 'Close');
      this.loadDoctors();
    });
  }

  updateDoctor(data: Doctor) {
    this.router.navigate([`/doctors/${data.id}`]);
  }

}
