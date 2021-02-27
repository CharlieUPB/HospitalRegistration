import { Component } from '@angular/core';
import { NoteGridConfig } from 'src/app/configs/grid-configs/notes.grid.config';

@Component({
  selector: 'app-search-note',
  templateUrl: './search-note.component.html',
  styleUrls: ['./search-note.component.css']
})
export class SearchNoteComponent {

  columnsConfig = NoteGridConfig;

  columnsData = [];

  deleteNote(id: number) {
    console.log('I will delete Note with Id' , id);
  }

  updateNote(id: number) {
    console.log('I will update Note with Id' , id);
  }
 
}
