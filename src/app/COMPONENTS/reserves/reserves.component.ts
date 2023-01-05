import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { DialogReserveComponent } from './dialog-reserve/dialog-reserve.component';
import { Router } from '@angular/router';
import { InternService } from 'src/app/services/intern.service';
import { DialogResponseComponent } from './dialog-response/dialog-response.component';

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.css']
})
export class ReservesComponent {
  constructor(private adminService: AdminService, private matDialog: MatDialog,  private router: Router, private internService: InternService) {
    this.routes = this.router.url
  }

  routes: string

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
    console.log(this.router.url)
    if (this.routes === '/intern-reserves') {
      this.internService.reserveIndex().subscribe((data) => {
        this.reserves = data as MatTableDataSource<any>
        this.reservesD = data
        console.log(data)
      })
    } else {
      this.adminService.reserveIndex().subscribe((data) => {
        this.reserves = data as MatTableDataSource<any>
        this.reservesD = data
        console.log(data)
      })
    }
  }

  reserveDetails(reserve: any) {
    this.matDialog.open(DialogReserveComponent, {data: reserve})
  }

  reserveResponse() {
    this.matDialog.open(DialogResponseComponent)
  }
}
