import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormlyFormOptions } from '@ngx-formly/core';
import { RegisterNoteFormConfig } from 'src/app/configs/form-configs/medical-appointment-note.config';
import { MedicalAppointmentNote } from 'src/app/models/medicalAppointmentNote';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { MedicalAppointmentNoteService } from 'src/app/services/medicalAppointmentNote/medical-appointment-note.service';
import { PatientService } from 'src/app/services/patient/patient.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-medical-appointment-note-registration',
  templateUrl: './medical-appointment-note-registration.component.html',
  styleUrls: ['./medical-appointment-note-registration.component.css']
})
export class MedicalAppointmentNoteRegistrationComponent {

  noteModel: MedicalAppointmentNote = {
    id: -1,
    date: null,
    description: '',
    doctor: null,
    patient: null
  };
  noteConfig = RegisterNoteFormConfig;
  options: FormlyFormOptions = {};
  currentID;
  title: string;
  subtitle: string;

  constructor(private route: ActivatedRoute, 
            private service: MedicalAppointmentNoteService,
            private doctorService: DoctorService,
            private patientService: PatientService,
            private snackbarService: SnackbarService) {}

  ngOnInit(): void {

    this.noteConfig[this.noteConfig.length -1].templateOptions.options = this.doctorService.getDoctors();
    this.noteConfig[this.noteConfig.length -2].templateOptions.options = this.patientService.getPatients();

    this.route.paramMap.subscribe(params => {
      this.currentID= +params.get('id');
      if (this.currentID) {
        this.title = `Update the Medical Note with ID ${this.currentID}`;
        this.subtitle = `Please enter all the required fields to update the Medical Note with ID ${this.currentID}`
        this.service.getMedicalAppointmentNoteById(this.currentID).subscribe((res) => {
          this.noteModel = res;
          this.noteModel.patient = this.noteModel.patient.id as any;
          this.noteModel.doctor = this.noteModel.doctor.id as any;
        });
      } else {
        this.title = "Register the Patient Medical Note For This Appointment";
        this.subtitle = "Please enter all the required information to register a new patient medical note";
      }
    });
  }

  saveNote(note: MedicalAppointmentNote) {
    note.patient = {id: note.patient} as any;
    note.doctor = {id: note.doctor} as any;
    if(this.currentID) {
      this.service.updateMedicalAppointmentNote(note, this.currentID).subscribe((res) => {
        this.snackbarService.showMessage('Medical Note Successfully Updated', 'Close');
      });
    } else {
      this.service.createMedicalAppointmentNote(note).subscribe((res) => {
        this.snackbarService.showMessage('Medical Note Successfully Created', 'Close');
        this.noteModel = {} as any;
      });
    }
  }
}
