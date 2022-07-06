import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailAppointmentComponent } from './modal-detail-appointment.component';

describe('ModalDetailAppointmentComponent', () => {
  let component: ModalDetailAppointmentComponent;
  let fixture: ComponentFixture<ModalDetailAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
