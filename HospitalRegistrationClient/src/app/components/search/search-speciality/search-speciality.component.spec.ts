import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSpecialityComponent } from './search-speciality.component';

describe('SearchSpecialityComponent', () => {
  let component: SearchSpecialityComponent;
  let fixture: ComponentFixture<SearchSpecialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSpecialityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
