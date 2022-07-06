import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ThemKhoa } from 'src/app/models/them-khoa';
import { ThemKhoaService } from './service/them-khoa.service';

@Component({
  selector: 'app-modal-them-khoa',
  templateUrl: './modal-them-khoa.component.html',
  styleUrls: ['./modal-them-khoa.component.css']
})
export class ModalThemKhoaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalThemKhoaComponent>, private ser: ThemKhoaService) { }
  error: boolean = false;
  ngOnInit(): void {
  }
  onNoClick() {
    this.dialogRef.close();
  }
  data: ThemKhoa = new ThemKhoa();
  onKeyTenKhoa(event: any) {
    this.data.tenkhoa = event.target.value
  }
  doAdd() {
    if (this.data.tenkhoa.length > 0) {
      this.ser.doAddKhoa(this.data).subscribe({
        next: res => {
          this.onNoClick();
        },
        error: err => {
          this.error = true;
        }
      })
    }
  }
}
