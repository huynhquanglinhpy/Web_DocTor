import { TestBed } from '@angular/core/testing';

import { DisableApointmentService } from './disable-apointment.service';

describe('DisableApointmentService', () => {
  let service: DisableApointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisableApointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
