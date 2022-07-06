import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDisalbleThuocComponent } from './modal-disalble-thuoc.component';

describe('ModalDisalbleThuocComponent', () => {
  let component: ModalDisalbleThuocComponent;
  let fixture: ComponentFixture<ModalDisalbleThuocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDisalbleThuocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDisalbleThuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
