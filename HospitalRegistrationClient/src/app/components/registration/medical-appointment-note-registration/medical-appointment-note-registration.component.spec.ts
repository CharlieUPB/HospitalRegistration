import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAppointmentNoteRegistrationComponent } from './medical-appointment-note-registration.component';

describe('MedicalAppointmentNoteRegistrationComponent', () => {
  let component: MedicalAppointmentNoteRegistrationComponent;
  let fixture: ComponentFixture<MedicalAppointmentNoteRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAppointmentNoteRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAppointmentNoteRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
