import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityRegistrationComponent } from './speciality-registration.component';

describe('SpecialityRegistrationComponent', () => {
  let component: SpecialityRegistrationComponent;
  let fixture: ComponentFixture<SpecialityRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialityRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialityRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
