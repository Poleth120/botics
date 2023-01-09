import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-ticket',
  templateUrl: './dialog-ticket.component.html',
  styleUrls: ['./dialog-ticket.component.css']
})
export class DialogTicketComponent {
  constructor(public dialogRef: MatDialogRef<DialogTicketComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) {
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
