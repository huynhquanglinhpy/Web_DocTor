import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRenewPasswordComponent } from './modal-renew-password.component';

describe('ModalRenewPasswordComponent', () => {
  let component: ModalRenewPasswordComponent;
  let fixture: ComponentFixture<ModalRenewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRenewPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRenewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
