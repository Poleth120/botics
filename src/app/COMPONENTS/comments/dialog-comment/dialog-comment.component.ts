import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-comment',
  templateUrl: './dialog-comment.component.html',
  styleUrls: ['./dialog-comment.component.css']
})
export class DialogCommentComponent {
  constructor(public dialogRef: MatDialogRef<DialogCommentComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) {

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
