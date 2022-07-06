import { TestBed } from '@angular/core/testing';

import { AddNewMedicineService } from './add-new-medicine.service';

describe('AddNewMedicineService', () => {
  let service: AddNewMedicineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewMedicineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
