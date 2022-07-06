import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailHosobenhanComponent } from './modal-detail-hosobenhan.component';

describe('ModalDetailHosobenhanComponent', () => {
  let component: ModalDetailHosobenhanComponent;
  let fixture: ComponentFixture<ModalDetailHosobenhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailHosobenhanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailHosobenhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
