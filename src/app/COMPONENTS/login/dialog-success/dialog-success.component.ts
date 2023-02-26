import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-success',
  templateUrl: './dialog-success.component.html',
  styleUrls: ['./dialog-success.component.css']
})
export class DialogSuccessComponent {
  constructor(public dialogRef: MatDialogRef<DialogSuccessComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
