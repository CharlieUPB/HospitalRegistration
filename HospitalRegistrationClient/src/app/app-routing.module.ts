import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegistrationComponent } from './components/registration/doctor-registration/doctor-registration.component';
import { HospitalRegistrationComponent } from './components/registration/hospital-registration/hospital-registration.component';
import { MedicalAppointmentNoteRegistrationComponent } from './components/registration/medical-appointment-note-registration/medical-appointment-note-registration.component';
import { PatientRegistrationComponent } from './components/registration/patient-registration/patient-registration.component';
import { SpecialityRegistrationComponent } from './components/registration/speciality-registration/speciality-registration.component';

const routes: Routes = [
  { path: 'doctors', component: DoctorRegistrationComponent },
  { path: 'hospitals', component: HospitalRegistrationComponent },
  { path: 'notes', component: MedicalAppointmentNoteRegistrationComponent },
  { path: 'patients', component: PatientRegistrationComponent },
  { path: 'specialities', component: SpecialityRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }