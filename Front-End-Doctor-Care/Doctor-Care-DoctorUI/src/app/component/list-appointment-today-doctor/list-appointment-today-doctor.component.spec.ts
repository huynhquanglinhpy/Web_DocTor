import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppointmentTodayDoctorComponent } from './list-appointment-today-doctor.component';

describe('ListAppointmentTodayDoctorComponent', () => {
  let component: ListAppointmentTodayDoctorComponent;
  let fixture: ComponentFixture<ListAppointmentTodayDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppointmentTodayDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppointmentTodayDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
