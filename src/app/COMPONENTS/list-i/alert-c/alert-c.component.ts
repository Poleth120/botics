import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-c',
  templateUrl: './alert-c.component.html',
  styleUrls: ['./alert-c.component.css']
})
export class AlertCComponent {

  constructor(private matDialogRef: MatDialogRef<AlertCComponent>) {}

  closeDialog(): void {
    this.matDialogRef.close(false);
  }
  confirm(): void {
    this.matDialogRef.close(true);
  }

}
