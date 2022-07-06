import { TestBed } from '@angular/core/testing';

import { DetailApointmentService } from './detail-apointment.service';

describe('DetailApointmentService', () => {
  let service: DetailApointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailApointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
