import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastApointmentComponent } from './past-apointment.component';

describe('PastApointmentComponent', () => {
  let component: PastApointmentComponent;
  let fixture: ComponentFixture<PastApointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastApointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastApointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
