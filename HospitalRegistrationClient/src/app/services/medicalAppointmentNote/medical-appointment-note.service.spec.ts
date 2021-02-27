import { TestBed } from '@angular/core/testing';

import { MedicalAppointmentNoteService } from './medical-appointment-note.service';

describe('MedicalAppointmentNoteService', () => {
  let service: MedicalAppointmentNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalAppointmentNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
