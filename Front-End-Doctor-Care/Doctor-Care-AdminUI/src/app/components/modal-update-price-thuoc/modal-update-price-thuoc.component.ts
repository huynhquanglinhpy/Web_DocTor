import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InfoMedicine } from 'src/app/models/info-medicine';
import { UpdatePriceThuoc } from 'src/app/models/update-price-thuoc';
import { UpdatePriceService } from './service/update-price.service';

@Component({
  selector: 'app-modal-update-price-thuoc',
  templateUrl: './modal-update-price-thuoc.component.html',
  styleUrls: ['./modal-update-price-thuoc.component.css']
})
export class ModalUpdatePriceThuocComponent implements OnInit {
  error: boolean = false;
  data!: InfoMedicine;
  constructor(public dialogRef: MatDialogRef<ModalUpdatePriceThuocComponent>, @Inject(MAT_DIALOG_DATA) data: InfoMedicine, private ser: UpdatePriceService) {
    this.data = data;
  }
  dataUpdate: UpdatePriceThuoc = new UpdatePriceThuoc();
  ngOnInit(): void {
    this.dataUpdate.id = this.data.id;
  }
  onKeyGiaTien(event: any) {
    this.dataUpdate.price = +event.target.value
  }
  do() {
    this.ser.doUpdaetPrice(this.dataUpdate).subscribe(
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
}
