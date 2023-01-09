import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dialog-reserve',
  templateUrl: './dialog-reserve.component.html',
  styleUrls: ['./dialog-reserve.component.css']
})
export class DialogReserveComponent {
  constructor(public dialogRef: MatDialogRef<DialogReserveComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) {
    this.routes = this.router.url;
  }

  routes: string

  ngOnInit(): void {
    console.log(this.data)
  }

  onNoClick() {
    this.dialogRef.close()
  }
}
