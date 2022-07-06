import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddNewTypeMedicineComponent } from './modal-add-new-type-medicine.component';

describe('ModalAddNewTypeMedicineComponent', () => {
  let component: ModalAddNewTypeMedicineComponent;
  let fixture: ComponentFixture<ModalAddNewTypeMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddNewTypeMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddNewTypeMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
