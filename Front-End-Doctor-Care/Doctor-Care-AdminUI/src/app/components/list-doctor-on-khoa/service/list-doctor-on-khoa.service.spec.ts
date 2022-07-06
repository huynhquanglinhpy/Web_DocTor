import { TestBed } from '@angular/core/testing';

import { ListDoctorOnKhoaService } from './list-doctor-on-khoa.service';

describe('ListDoctorOnKhoaService', () => {
  let service: ListDoctorOnKhoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDoctorOnKhoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
