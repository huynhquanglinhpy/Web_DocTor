import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ThemThuoc } from 'src/app/models/them-thuoc';
import { AddNewMedicineService } from './service/add-new-medicine.service';

@Component({
  selector: 'app-modal-add-new-type-medicine',
  templateUrl: './modal-add-new-type-medicine.component.html',
  styleUrls: ['./modal-add-new-type-medicine.component.css']
})
export class ModalAddNewTypeMedicineComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalAddNewTypeMedicineComponent>, private ser: AddNewMedicineService) { }
  error: boolean = false;
  ngOnInit(): void {
  }
  doAdd() {
    this.ser.doAddNewThuoc(this.data).subscribe(
      {
        next: res => {
          this.onNoClick();
        },
        error: err => {
          this.error = true;
        }
      }
    )
  }
  onNoClick() {
    this.dialogRef.close();
  }
  data: ThemThuoc = new ThemThuoc();
  onKeyTenThuoc(event: any) {
    this.data.name = event.target.value;
  }
  onKeyGiaTien(event: any) {
    this.data.price = +event.target.value;
  }
}
