import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDisableApointmentComponent } from './approve-disable-apointment.component';

describe('ApproveDisableApointmentComponent', () => {
  let component: ApproveDisableApointmentComponent;
  let fixture: ComponentFixture<ApproveDisableApointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveDisableApointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveDisableApointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
