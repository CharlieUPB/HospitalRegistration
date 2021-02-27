import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpecialityGridConfig } from 'src/app/configs/grid-configs/speciality.grid.config';
import { Speciality } from 'src/app/models/speciality';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { SpecialityService } from 'src/app/services/speciality/speciality.service';

@Component({
  selector: 'app-search-speciality',
  templateUrl: './search-speciality.component.html',
  styleUrls: ['./search-speciality.component.css']
})
export class SearchSpecialityComponent implements OnInit {

  columnsConfig = SpecialityGridConfig;

  columnsData: any;

  constructor(private router: Router, private service: SpecialityService, private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.columnsData = this.service.getSpecialities();
  }

  deleteSpeciality(data: Speciality) {
      this.snackbarService.showMessage('Unable to Delete, To Keep Data Integrity', 'Close');
  }

  updateSpeciality(data: Speciality) {
    this.router.navigate([`/specialities/${data.id}`]);
  }

}
