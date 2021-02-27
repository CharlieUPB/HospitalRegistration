import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material'
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AgGridModule } from 'ag-grid-angular';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DoctorRegistrationComponent } from './components/registration/doctor-registration/doctor-registration.component';
import { HospitalRegistrationComponent } from './components/registration/hospital-registration/hospital-registration.component';
import { PatientRegistrationComponent } from './components/registration/patient-registration/patient-registration.component';
import { SpecialityRegistrationComponent } from './components/registration/speciality-registration/speciality-registration.component';
import { MedicalAppointmentNoteRegistrationComponent } from './components/registration/medical-appointment-note-registration/medical-appointment-note-registration.component';
import { DynamicGridComponent } from './components/dynamic-grid/dynamic-grid.component';
import { HomeComponent } from './components/home/home.component';
import { SearchHospitalComponent } from './components/search/search-hospital/search-hospital.component';
import { ActionsCellRendererComponent } from './components/dynamic-grid/custom-cells/actions-cell-renderer/actions-cell-renderer.component';
import { SearchDoctorComponent } from './components/search/search-doctor/search-doctor.component';
import { SearchPatientComponent } from './components/search/search-patient/search-patient.component';
import { SearchSpecialityComponent } from './components/search/search-speciality/search-speciality.component';
import { SearchNoteComponent } from './components/search/search-note/search-note.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DoctorRegistrationComponent,
    HospitalRegistrationComponent,
    PatientRegistrationComponent,
    SpecialityRegistrationComponent,
    MedicalAppointmentNoteRegistrationComponent,
    HomeComponent,
    NavBarComponent,
    DynamicGridComponent,
    SearchHospitalComponent,
    ActionsCellRendererComponent,
    SearchDoctorComponent,
    SearchPatientComponent,
    SearchSpecialityComponent,
    SearchNoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatListModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    AppRoutingModule,
    AgGridModule.withComponents([ActionsCellRendererComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
