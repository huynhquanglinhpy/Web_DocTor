import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportMedicineComponent } from './import-medicine.component';

describe('ImportMedicineComponent', () => {
  let component: ImportMedicineComponent;
  let fixture: ComponentFixture<ImportMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
