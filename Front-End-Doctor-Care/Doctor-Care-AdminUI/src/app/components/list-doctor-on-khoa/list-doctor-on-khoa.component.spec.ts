import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDoctorOnKhoaComponent } from './list-doctor-on-khoa.component';

describe('ListDoctorOnKhoaComponent', () => {
  let component: ListDoctorOnKhoaComponent;
  let fixture: ComponentFixture<ListDoctorOnKhoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDoctorOnKhoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDoctorOnKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
