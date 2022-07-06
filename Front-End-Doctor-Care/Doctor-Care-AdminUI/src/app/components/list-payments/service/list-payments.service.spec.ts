import { TestBed } from '@angular/core/testing';

import { ListPaymentsService } from './list-payments.service';

describe('ListPaymentsService', () => {
  let service: ListPaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
