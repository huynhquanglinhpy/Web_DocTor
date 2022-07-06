import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalThemKhoaComponent } from './modal-them-khoa.component';

describe('ModalThemKhoaComponent', () => {
  let component: ModalThemKhoaComponent;
  let fixture: ComponentFixture<ModalThemKhoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalThemKhoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalThemKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
