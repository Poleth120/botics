import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-cc',
  templateUrl: './alert-c.component.html',
  styleUrls: ['./alert-c.component.css']
})
export class AlertCCComponent {

  constructor(private matDialogRef: MatDialogRef<AlertCCComponent>) {}

  closeDialog(): void {
    this.matDialogRef.close(false);
  }
  confirm(): void {
    this.matDialogRef.close(true);
  }

}
