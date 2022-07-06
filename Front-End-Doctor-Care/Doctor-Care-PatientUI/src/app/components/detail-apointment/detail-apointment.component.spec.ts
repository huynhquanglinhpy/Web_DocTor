import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailApointmentComponent } from './detail-apointment.component';

describe('DetailApointmentComponent', () => {
  let component: DetailApointmentComponent;
  let fixture: ComponentFixture<DetailApointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailApointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailApointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
