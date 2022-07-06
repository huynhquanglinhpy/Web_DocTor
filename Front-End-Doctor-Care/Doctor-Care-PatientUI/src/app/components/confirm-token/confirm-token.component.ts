import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmTokenService } from './service/confirm-token.service';

@Component({
  selector: 'app-confirm-token',
  templateUrl: './confirm-token.component.html',
  styleUrls: ['./confirm-token.component.css']
})
export class ConfirmTokenComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private ser: ConfirmTokenService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.detailToken());
  }
  detailToken() {
    let checkidexist = this.activeRoute.snapshot.paramMap.has('token');
    if (checkidexist) {
      let token = this.activeRoute.snapshot.paramMap.get('token')!;
      this.ser.renewPass(token).subscribe({
        next: res => {
          alert("Thanh cong")
          this.router.navigateByUrl('/login');
        },
        error: err => {
          alert("That bai");
        }
      })
    }
    else {
      //this.router.navigateByUrl('/login');
    }
  }
}
