import { TestBed } from '@angular/core/testing';

import { RenewpassService } from './renewpass.service';

describe('RenewpassService', () => {
  let service: RenewpassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenewpassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
