import { TestBed } from '@angular/core/testing';

import { NghiPhepService } from './nghi-phep.service';

describe('NghiPhepService', () => {
  let service: NghiPhepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NghiPhepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
