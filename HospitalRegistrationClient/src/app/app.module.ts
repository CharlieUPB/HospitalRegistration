import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material'
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';

import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

import {MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DoctorRegistrationComponent } from './components/registration/doctor-registration/doctor-registration.component';
import { HospitalRegistrationComponent } from './components/registration/hospital-registration/hospital-registration.component';
import { PatientRegistrationComponent } from './components/registration/patient-registration/patient-registration.component';
import { SpecialityRegistrationComponent } from './components/registration/speciality-registration/speciality-registration.component';
import { MedicalAppointmentNoteRegistrationComponent } from './components/registration/medical-appointment-note-registration/medical-appointment-note-registration.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DoctorRegistrationComponent,
    HospitalRegistrationComponent,
    PatientRegistrationComponent,
    SpecialityRegistrationComponent,
    MedicalAppointmentNoteRegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
