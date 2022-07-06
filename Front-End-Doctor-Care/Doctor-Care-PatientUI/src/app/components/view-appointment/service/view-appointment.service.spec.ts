import { TestBed } from '@angular/core/testing';

import { ViewAppointmentService } from './view-appointment.service';

describe('ViewAppointmentService', () => {
  let service: ViewAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
