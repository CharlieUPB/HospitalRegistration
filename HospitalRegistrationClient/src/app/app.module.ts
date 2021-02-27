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
import { AppRoutingModule } from './app-routing.module';

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
    ActionsCellRendererComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatNativeDateModule,
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
