import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApointmentComponent } from './list-apointment.component';

describe('ListApointmentComponent', () => {
  let component: ListApointmentComponent;
  let fixture: ComponentFixture<ListApointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListApointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
