import { Component, ViewChild, Inject } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Lab } from '../../list-l/list-l.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-lab',
  templateUrl: './dialog-lab.component.html',
  styleUrls: ['./dialog-lab.component.css']
})
export class DialogLabComponent {
  constructor(private adminService: AdminService,
    public dialogRef: MatDialogRef<DialogLabComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  labs = new MatTableDataSource<Lab>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Id',
    'Name',
    'Acciones'
  ];

  ngOnInit(): void {
    this.adminService.labIndex().subscribe((data) => {
      data.splice(this.data.idLab1 - 1, 1)
      this.labs = data as MatTableDataSource<Lab>;
      this.labs.paginator = this.paginator;
      console.log(data)
    });

  }

  select(idLab: number) {
    this.data.idLab2 = idLab
    console.log(this.data.idLab2)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
