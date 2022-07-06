import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdatePriceThuocComponent } from './modal-update-price-thuoc.component';

describe('ModalUpdatePriceThuocComponent', () => {
  let component: ModalUpdatePriceThuocComponent;
  let fixture: ComponentFixture<ModalUpdatePriceThuocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdatePriceThuocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdatePriceThuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
