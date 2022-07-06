import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMedicine } from 'src/app/models/add-medicine';
import { InfoMedicine } from 'src/app/models/info-medicine';
import { NameMedicine } from 'src/app/models/name-medicine';
import { ModalAddNewTypeMedicineComponent } from '../modal-add-new-type-medicine/modal-add-new-type-medicine.component';
import { ImportMedicineService } from './import-medicine.service';

@Component({
  selector: 'app-import-medicine',
  templateUrl: './import-medicine.component.html',
  styleUrls: ['./import-medicine.component.css']
})
export class ImportMedicineComponent implements OnInit {

  constructor(public dialog: MatDialog, private ser: ImportMedicineService) { }

  ngOnInit(): void {
  }
  popUpModalAddNewMedicine() {
    console.log("DO")
    const dialogRef = this.dialog.open(ModalAddNewTypeMedicineComponent, {
      width: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  dataListMedicineInDb: InfoMedicine[] = [];
  dataName: NameMedicine = new NameMedicine();
  onKeyNameThuoc(event: any) {
    this.dataName.name = event.target.value
    if (this.dataName.name.length > 0) {
      this.dataListMedicineInDb = [];
      this.ser.getMedicineByName(this.dataName).subscribe(this.getDatas());
    }
    else {
      this.dataListMedicineInDb = [];
    }
  }
  dataListAddMedicine: AddMedicine[] = [];
  getDatas() {
    return (data: any) => {
      this.dataListMedicineInDb = data;
      console.log(data);
    }
  }
  doAddInList(data: InfoMedicine) {
    let dataAddMedicine: AddMedicine = new AddMedicine();
    dataAddMedicine.name = data.name;
    dataAddMedicine.price = 0;
    dataAddMedicine.quantity = 0;
    dataAddMedicine.thuocid = data.id;
    if (this.dataListAddMedicine.find(x => x.thuocid === dataAddMedicine.thuocid) == null)
      this.dataListAddMedicine.push(dataAddMedicine)
  }
  onKeyGiaTien(event: any, item: AddMedicine) {
    if (this.dataListAddMedicine.findIndex(x => x.thuocid === item.thuocid) != -1) {
      let data: AddMedicine = this.dataListAddMedicine.find(x => x.thuocid === item.thuocid)!;
      data.price = event.target.value;
    }
    console.log(this.dataListAddMedicine)
  }
  onKeySoLuong(event: any, item: AddMedicine) {
    if (this.dataListAddMedicine.findIndex(x => x.thuocid === item.thuocid) != -1) {
      let data: AddMedicine = this.dataListAddMedicine.find(x => x.thuocid === item.thuocid)!;
      data.quantity = event.target.value;
    }
    console.log(this.dataListAddMedicine)
  }
  xoa(item: AddMedicine) {
    if (this.dataListAddMedicine.findIndex(x => x.thuocid === item.thuocid) != -1) {
      this.dataListAddMedicine = this.dataListAddMedicine.filter(data => data.thuocid !== item.thuocid)
    }
    console.log(this.dataListAddMedicine)
  }
  doAddNhapThuoc() {
    this.ser.doNhapKhoThuoc(this.dataListAddMedicine).subscribe({
      next: res => {
        this.dataListMedicineInDb = [];
        this.dataListAddMedicine = [];
        alert("Thêm thành công")
      },
      error: err => {
        if (err.statuscode === 403) {
          this.signOutAdmin();
        }
        alert("Lỗi không xác định")
      }
    })
  }
  local: Storage = localStorage;
  signOutAdmin() {
    this.local.removeItem("emailAdminLogin")
    this.local.removeItem("tokenAdminLogin")
    this.local.removeItem("adminImageUrl")
    window.location.href = '/';
  }
}
