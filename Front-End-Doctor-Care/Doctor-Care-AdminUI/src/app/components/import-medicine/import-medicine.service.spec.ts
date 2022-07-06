import { TestBed } from '@angular/core/testing';

import { ImportMedicineService } from './import-medicine.service';

describe('ImportMedicineService', () => {
  let service: ImportMedicineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportMedicineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
