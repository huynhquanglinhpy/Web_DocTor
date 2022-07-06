import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailApointmentService } from '../detail-apointment/service/detail-apointment.service';
import { ModalRenewPasswordComponent } from '../modal-renew-password/modal-renew-password.component';
import { RenewpasswordService } from './service/renewpassword.service';

@Component({
  selector: 'app-renewpassword',
  templateUrl: './renewpassword.component.html',
  styleUrls: ['./renewpassword.component.css']
})
export class RenewpasswordComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private ser: RenewpasswordService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.detailToken());
  }
  detailToken() {
    let checkidexist = this.activeRoute.snapshot.paramMap.has('token');
    if (checkidexist) {
      let token = this.activeRoute.snapshot.paramMap.get('token')!;
      const dialogRef = this.dialog.open(ModalRenewPasswordComponent, {
        width: '450px',
        data: token
      });

      dialogRef.afterClosed().subscribe(result => {

      });
    }
    else {
      //this.router.navigateByUrl('/login');
    }
  }
}
