import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tickets-send',
  templateUrl: './tickets-send.component.html',
  styleUrls: ['./tickets-send.component.css']
})
export class TicketsSendComponent {
  ticketsD:any;
ticketspD:any;
  constructor(public dialogRef: MatDialogRef<TicketsSendComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick() {
    this.dialogRef.close()
  }
}
