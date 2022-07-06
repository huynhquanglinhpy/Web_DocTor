import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNghiPhepComponent } from './modal-nghi-phep.component';

describe('ModalNghiPhepComponent', () => {
  let component: ModalNghiPhepComponent;
  let fixture: ComponentFixture<ModalNghiPhepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNghiPhepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNghiPhepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
