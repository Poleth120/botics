import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-response',
  templateUrl: './dialog-response.component.html',
  styleUrls: ['./dialog-response.component.css']
})
export class DialogResponseComponent {
  constructor(public dialogRef: MatDialogRef<DialogResponseComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  onNoClick() {
    this.dialogRef.close()
  }
}
