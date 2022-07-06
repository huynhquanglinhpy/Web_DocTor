import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentLayoutComponent } from './add-appointment-layout.component';

describe('AddAppointmentLayoutComponent', () => {
  let component: AddAppointmentLayoutComponent;
  let fixture: ComponentFixture<AddAppointmentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppointmentLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppointmentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
