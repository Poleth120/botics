import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comments-send',
  templateUrl: './comments-send.component.html',
  styleUrls: ['./comments-send.component.css']
})
export class CommentsSendComponent {
  constructor(public dialogRef: MatDialogRef<CommentsSendComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick() {
    this.dialogRef.close()
  }
}
