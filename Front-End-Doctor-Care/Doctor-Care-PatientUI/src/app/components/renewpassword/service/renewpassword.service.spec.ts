import { TestBed } from '@angular/core/testing';

import { RenewpasswordService } from './renewpassword.service';

describe('RenewpasswordService', () => {
  let service: RenewpasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenewpasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
