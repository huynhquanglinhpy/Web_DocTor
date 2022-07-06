import { TestBed } from '@angular/core/testing';

import { DanhsachdoctorService } from './danhsachdoctor.service';

describe('DanhsachdoctorService', () => {
  let service: DanhsachdoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanhsachdoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
