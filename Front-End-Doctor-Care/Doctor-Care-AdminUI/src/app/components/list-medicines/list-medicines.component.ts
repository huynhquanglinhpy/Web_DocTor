import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoMedicine } from 'src/app/models/info-medicine';
import { ListPatientsService } from '../list-patients/service/list-patients.service';
import { ModalAddNewTypeMedicineComponent } from '../modal-add-new-type-medicine/modal-add-new-type-medicine.component';
import { ModalDisalbleThuocComponent } from '../modal-disalble-thuoc/modal-disalble-thuoc.component';
import { ModalUpdatePriceThuocComponent } from '../modal-update-price-thuoc/modal-update-price-thuoc.component';
import { ListMedicinesService } from './service/list-medicines.service';

@Component({
  selector: 'app-list-medicines',
  templateUrl: './list-medicines.component.html',
  styleUrls: ['./list-medicines.component.css']
})
export class ListMedicinesComponent implements OnInit {

  constructor(public dialog: MatDialog, private ser: ListMedicinesService) { }
  datas: InfoMedicine[] = [];
  ngOnInit(): void {
    this.doGetDataFirst();
  }
  doGetDataFirst() {
    this.ser.getMedicineByName().subscribe(this.getDatas());
  }
  getDatas() {
    return (data: any) => {
      this.datas = data;
    }
  }
  popUpModalAddNewMedicine() {
    const dialogRef = this.dialog.open(ModalAddNewTypeMedicineComponent, {
      width: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  enableThuoc(item: InfoMedicine) {

    const dialogRef = this.dialog.open(ModalDisalbleThuocComponent, {
      width: '550px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {

      this.datas = [];
      this.doGetDataFirst();
    });
  }
  updatePrice(item: InfoMedicine) {
    const dialogRef = this.dialog.open(ModalUpdatePriceThuocComponent, {
      width: '550px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {

      this.datas = [];
      this.doGetDataFirst();
    });
  }
}
