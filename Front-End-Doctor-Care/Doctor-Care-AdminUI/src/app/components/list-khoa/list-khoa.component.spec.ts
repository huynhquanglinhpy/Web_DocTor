import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKhoaComponent } from './list-khoa.component';

describe('ListKhoaComponent', () => {
  let component: ListKhoaComponent;
  let fixture: ComponentFixture<ListKhoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKhoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
