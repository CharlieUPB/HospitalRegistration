import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientGridConfig } from 'src/app/configs/grid-configs/patient.grid.config';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient/patient.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {

  columnsConfig = PatientGridConfig;

  columnsData: any;

  constructor(private router: Router, private service: PatientService, private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.columnsData = this.service.getPatients();
  }

  deletePatient(data: Patient) {
    this.service.deletePatient(data.id).subscribe((res) => {
      this.snackbarService.showMessage('Patient Successfully Deleted', 'Close');
      this.columnsData = this.service.getPatients();
    });
  }

  updatePatient(data: Patient) {
    this.router.navigate([`/patients/${data.id}`]);
  }


}
