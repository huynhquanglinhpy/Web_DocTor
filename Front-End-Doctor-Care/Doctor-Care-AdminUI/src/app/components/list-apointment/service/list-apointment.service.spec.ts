import { TestBed } from '@angular/core/testing';

import { ListApointmentService } from './list-apointment.service';

describe('ListApointmentService', () => {
  let service: ListApointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListApointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
