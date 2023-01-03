import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ticket',
  templateUrl: './dialog-ticket.component.html',
  styleUrls: ['./dialog-ticket.component.css']
})
export class DialogTicketComponent {
  constructor(public dialogRef: MatDialogRef<DialogTicketComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log(this.data)
  }

  onNoClick() {
    this.dialogRef.close()
  }
}
