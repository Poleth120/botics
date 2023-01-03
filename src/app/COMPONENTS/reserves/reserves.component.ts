import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { DialogReserveComponent } from './dialog-reserve/dialog-reserve.component';

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.css']
})
export class ReservesComponent {
  constructor(private adminService: AdminService, private matDialog: MatDialog) {}

  displayedColumns: string[] = [
    'Name',
    'Last Name',
    'Email',
    'Role',
    'Acciones',
  ];

  reserves =  new MatTableDataSource<any>([]);
  reservesD: any
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.adminService.reserveIndex().subscribe((data) => {
      this.reserves = data as MatTableDataSource<any>
      this.reservesD = data
      console.log(data)
    })

  }

  reserveDetails(reserve: any) {
    this.matDialog.open(DialogReserveComponent, {data: reserve})
  }
}
