import { Component } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';
import { RegisterNoteFormConfig } from 'src/app/configs/form-configs/medical-appointment-note.config';
import { MedicalAppointmentNote } from 'src/app/models/medicalAppointmentNote';

@Component({
  selector: 'app-medical-appointment-note-registration',
  templateUrl: './medical-appointment-note-registration.component.html',
  styleUrls: ['./medical-appointment-note-registration.component.css']
})
export class MedicalAppointmentNoteRegistrationComponent {

  noteModel: MedicalAppointmentNote = {
    id: 0,
    date: null,
    description: '',
    doctor: null,
    patient: null
  };
  
  noteConfig = RegisterNoteFormConfig;

  options: FormlyFormOptions = {};

  saveNote(note: MedicalAppointmentNote) {
    console.log('I will save Note to DB: ', note);
    this.options.resetModel();
  }
}
