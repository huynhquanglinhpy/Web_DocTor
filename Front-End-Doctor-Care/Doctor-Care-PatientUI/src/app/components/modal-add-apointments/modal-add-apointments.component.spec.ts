import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddApointmentsComponent } from './modal-add-apointments.component';

describe('ModalAddApointmentsComponent', () => {
  let component: ModalAddApointmentsComponent;
  let fixture: ComponentFixture<ModalAddApointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddApointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddApointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
