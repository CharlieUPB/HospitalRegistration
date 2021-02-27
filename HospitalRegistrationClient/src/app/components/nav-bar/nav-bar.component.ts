import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {


  fillerNav = [
    { name: "Home", path: "/home" },
    { name: "Register Hospitals", path: "/hospitals" },
    { name: "Search Hospitals", path: "/searchHospitals" },
    { name: "Register Specialities", path: "/specialities" },
    { name: "Search Specialities", path: "/searchSpecialities" },
    { name: "Register Doctors", path: "/doctors" },
    { name: "Search Doctors", path: "/searchDoctors" },
    { name: "Register Patients", path: "/patients" },
    { name: "Search Patients", path: "/searchPatients" },
    { name: "Register Medical Notes", path: "/notes" },
    { name: "Search Medical Notes", path: "/searchNotes" },
  ];

  onNavigate() {
    window.open("https://github.com/CharlieUPB/HospitalRegistration/tree/master", "_blank");
  }

}
