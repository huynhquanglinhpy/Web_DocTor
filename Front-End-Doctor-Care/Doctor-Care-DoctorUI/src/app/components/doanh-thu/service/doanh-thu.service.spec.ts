import { TestBed } from '@angular/core/testing';

import { DoanhThuService } from './doanh-thu.service';

describe('DoanhThuService', () => {
  let service: DoanhThuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoanhThuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
