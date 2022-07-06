import { TestBed } from '@angular/core/testing';

import { GetDetailHosobenhanService } from './get-detail-hosobenhan.service';

describe('GetDetailHosobenhanService', () => {
  let service: GetDetailHosobenhanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDetailHosobenhanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
