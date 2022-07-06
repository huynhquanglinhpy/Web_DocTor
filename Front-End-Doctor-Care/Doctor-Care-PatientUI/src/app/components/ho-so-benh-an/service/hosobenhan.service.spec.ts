import { TestBed } from '@angular/core/testing';

import { HosobenhanService } from './hosobenhan.service';

describe('HosobenhanService', () => {
  let service: HosobenhanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HosobenhanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
