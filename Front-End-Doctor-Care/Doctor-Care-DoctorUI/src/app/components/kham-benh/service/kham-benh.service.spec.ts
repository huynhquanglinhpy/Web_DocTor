import { TestBed } from '@angular/core/testing';

import { KhamBenhService } from './kham-benh.service';

describe('KhamBenhService', () => {
  let service: KhamBenhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhamBenhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
