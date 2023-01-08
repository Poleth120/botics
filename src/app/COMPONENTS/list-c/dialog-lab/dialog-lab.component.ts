import { Component, ViewChild, Inject } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Lab } from '../../list-l/list-l.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogChangeComponent } from '../dialog-change/dialog-change.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-lab',
  templateUrl: './dialog-lab.component.html',
  styleUrls: ['./dialog-lab.component.css'],
})
export class DialogLabComponent {
  constructor(
    private adminService: AdminService,
    public dialogRef: MatDialogRef<DialogLabComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialog: MatDialog,
    private router: Router
  ) {
    this.routes = this.router.url;
  }

  labs = new MatTableDataSource<Lab>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  routes: string;
  labId = this.data.idLab1

  displayedColumns: string[] = ['Id', 'Name', 'Acciones'];

  ngOnInit(): void {
    console.log(this.data)
    this.adminService.labIndex().subscribe((data) => {
      data.splice(this.data.idLab1 - 1, 1);
      this.labs = data as MatTableDataSource<Lab>;
      this.labs.paginator = this.paginator;
    });
  }

  select(idLab: number) {
    if (this.routes === '/lab-computadoras' && this.data.idLab1 === 0) {
      this.data.idLab1 = idLab;
    } else {
      const dialogReference = this.matDialog.open(DialogChangeComponent, {
        data: this.data,
      });
      dialogReference.afterClosed().subscribe((result) => {
        if (result) {
          this.data.idLab2 = idLab;
          console.log(result);
          this.dialogRef.close(result);
        }
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
