import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSoBenhAnComponent } from './ho-so-benh-an.component';

describe('HoSoBenhAnComponent', () => {
  let component: HoSoBenhAnComponent;
  let fixture: ComponentFixture<HoSoBenhAnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoSoBenhAnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoSoBenhAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
