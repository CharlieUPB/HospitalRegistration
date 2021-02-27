import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicGridComponent } from './components/dynamic-grid/dynamic-grid.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorRegistrationComponent } from './components/registration/doctor-registration/doctor-registration.component';
import { HospitalRegistrationComponent } from './components/registration/hospital-registration/hospital-registration.component';
import { MedicalAppointmentNoteRegistrationComponent } from './components/registration/medical-appointment-note-registration/medical-appointment-note-registration.component';
import { PatientRegistrationComponent } from './components/registration/patient-registration/patient-registration.component';
import { SpecialityRegistrationComponent } from './components/registration/speciality-registration/speciality-registration.component';
import { SearchDoctorComponent } from './components/search/search-doctor/search-doctor.component';
import { SearchHospitalComponent } from './components/search/search-hospital/search-hospital.component';
import { SearchNoteComponent } from './components/search/search-note/search-note.component';
import { SearchPatientComponent } from './components/search/search-patient/search-patient.component';
import { SearchSpecialityComponent } from './components/search/search-speciality/search-speciality.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'doctors', component: DoctorRegistrationComponent },
  { path: 'doctors/:id', component: DoctorRegistrationComponent },
  { path: 'hospitals', component: HospitalRegistrationComponent },
  { path: 'hospitals/:id', component: HospitalRegistrationComponent },
  { path: 'notes', component: MedicalAppointmentNoteRegistrationComponent },
  { path: 'notes/:id', component: MedicalAppointmentNoteRegistrationComponent },
  { path: 'patients', component: PatientRegistrationComponent },
  { path: 'patients/:id', component: PatientRegistrationComponent },
  { path: 'specialities', component: SpecialityRegistrationComponent },
  { path: 'specialities/:id', component: SpecialityRegistrationComponent },
  { path: 'searchHospitals', component: SearchHospitalComponent },
  { path: 'searchDoctors', component: SearchDoctorComponent },
  { path: 'searchNotes', component: SearchNoteComponent },
  { path: 'searchPatients', component: SearchPatientComponent },
  { path: 'searchSpecialities', component: SearchSpecialityComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
