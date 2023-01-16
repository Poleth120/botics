import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { DialogShowComponent } from './dialog-show/dialog-show.component';

@Component({
  selector: 'app-list-i',
  templateUrl: './list-i.component.html',
  styleUrls: ['./list-i.component.css']
})
export class ListIComponent {
  constructor(private adminService: AdminService, private matDialog: MatDialog) {}

  displayedColumns: string[] = [
    'Id',
    'Nombre de usuario',
    'Email',
    'Estado',
    'Acciones',
  ];
  interns: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.adminService.internIndex().subscribe((data) => {
      this.interns = new MatTableDataSource<any>(data)
      this.interns.paginator = this.paginator
    })
  }

  openDialogeShow(intern: any) {
    const dialogReference = this.matDialog.open(DialogShowComponent, {
      data: intern,
    });
  }

  toggleChange(event: MatSlideToggleChange, id: number) {
    if (event.checked) {
      this.adminService.internEnable(id).subscribe(() => {
        this.ngOnInit();
      });
    } else {
      this.adminService.internDisable(id).subscribe(() => {
        this.ngOnInit();
      });
    }
  }


}
