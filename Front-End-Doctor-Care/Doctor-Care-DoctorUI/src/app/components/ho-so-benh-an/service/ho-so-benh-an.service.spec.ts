import { TestBed } from '@angular/core/testing';

import { HoSoBenhAnService } from './ho-so-benh-an.service';

describe('HoSoBenhAnService', () => {
  let service: HoSoBenhAnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoSoBenhAnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
