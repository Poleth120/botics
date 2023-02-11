import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeacherService } from 'src/app/services/teacher.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-reserves-send',
  templateUrl: './reserves-send.component.html',
  styleUrls: ['./reserves-send.component.scss']
})
export class ReservesSendComponent {

  reservesuD:any;
  constructor(public dialogRef: MatDialogRef<ReservesSendComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  onNoClick() {
    this.dialogRef.close()
  }



}
