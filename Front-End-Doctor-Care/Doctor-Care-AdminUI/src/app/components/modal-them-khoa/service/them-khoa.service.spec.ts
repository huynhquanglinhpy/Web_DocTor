import { TestBed } from '@angular/core/testing';

import { ThemKhoaService } from './them-khoa.service';

describe('ThemKhoaService', () => {
  let service: ThemKhoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemKhoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
