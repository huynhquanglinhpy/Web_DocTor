import { TestBed } from '@angular/core/testing';

import { ListKhoaService } from './list-khoa.service';

describe('ListKhoaService', () => {
  let service: ListKhoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListKhoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
