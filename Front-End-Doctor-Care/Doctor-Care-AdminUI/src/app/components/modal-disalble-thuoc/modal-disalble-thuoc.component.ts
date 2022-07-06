import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisableMedicine } from 'src/app/models/disable-medicine';
import { InfoMedicine } from 'src/app/models/info-medicine';
import { DisableThuocService } from './service/disable-thuoc.service';

@Component({
  selector: 'app-modal-disalble-thuoc',
  templateUrl: './modal-disalble-thuoc.component.html',
  styleUrls: ['./modal-disalble-thuoc.component.css']
})
export class ModalDisalbleThuocComponent implements OnInit {
  data!: InfoMedicine;
  error: boolean = false;
  constructor(public dialogRef: MatDialogRef<ModalDisalbleThuocComponent>, private ser: DisableThuocService, @Inject(MAT_DIALOG_DATA) data: InfoMedicine) {
    this.data = data
  }
  dataDisable: DisableMedicine = new DisableMedicine();
  ngOnInit(): void {
    this.dataDisable.id = this.data.id;
  }
  do() {
    this.ser.doDisableEnableThuoc(this.dataDisable).subscribe(
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
  onKeyLyDo(event: any) {
    this.dataDisable.reason = event.target.value
  }
}
