import { TestBed } from '@angular/core/testing';

import { DetailDoctorService } from './detail-doctor.service';

describe('DetailDoctorService', () => {
  let service: DetailDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
