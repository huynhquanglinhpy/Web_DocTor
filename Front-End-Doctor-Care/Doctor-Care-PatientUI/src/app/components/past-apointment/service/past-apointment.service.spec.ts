import { TestBed } from '@angular/core/testing';

import { PastApointmentService } from './past-apointment.service';

describe('PastApointmentService', () => {
  let service: PastApointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastApointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
