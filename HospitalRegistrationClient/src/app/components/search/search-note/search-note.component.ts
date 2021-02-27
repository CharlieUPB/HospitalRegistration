import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteGridConfig } from 'src/app/configs/grid-configs/notes.grid.config';
import { MedicalAppointmentNote } from 'src/app/models/medicalAppointmentNote';
import { MedicalAppointmentNoteService } from 'src/app/services/medicalAppointmentNote/medical-appointment-note.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-search-note',
  templateUrl: './search-note.component.html',
  styleUrls: ['./search-note.component.css']
})
export class SearchNoteComponent implements OnInit {

  columnsConfig = NoteGridConfig;

  columnsData: any;

  constructor(private router: Router, private service: MedicalAppointmentNoteService, private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes() {
    this.service.getMedicalAppointmentNotes().subscribe((res) => {
      for (let i=0; i<res.length; i++) {
        res[i].doctor = res[i].doctor.name as any;
        res[i].patient = res[i].patient.name as any;
      }
      this.columnsData = res;
    });
  }
 
  deleteNote(data: MedicalAppointmentNote) {
    this.service.deleteMedicalAppointmentNote(data.id).subscribe((res) => {
      this.snackbarService.showMessage('Note Successfully Deleted', 'Close');
      this.loadNotes();
    });
  }

  updateNote(data: MedicalAppointmentNote) {
      this.router.navigate([`/notes/${data.id}`]);
  }
 
}
