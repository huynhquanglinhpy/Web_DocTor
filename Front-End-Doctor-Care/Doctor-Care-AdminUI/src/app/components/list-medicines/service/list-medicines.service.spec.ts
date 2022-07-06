import { TestBed } from '@angular/core/testing';

import { ListMedicinesService } from './list-medicines.service';

describe('ListMedicinesService', () => {
  let service: ListMedicinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListMedicinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
