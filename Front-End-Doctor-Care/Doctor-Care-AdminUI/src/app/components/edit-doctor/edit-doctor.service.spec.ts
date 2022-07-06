import { TestBed } from '@angular/core/testing';

import { EditDoctorService } from './edit-doctor.service';

describe('EditDoctorService', () => {
  let service: EditDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
