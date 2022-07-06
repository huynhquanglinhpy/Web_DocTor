import { TestBed } from '@angular/core/testing';

import { DisableThuocService } from './disable-thuoc.service';

describe('DisableThuocService', () => {
  let service: DisableThuocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisableThuocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
