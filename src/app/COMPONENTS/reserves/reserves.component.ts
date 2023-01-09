import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { DialogReserveComponent } from './dialog-reserve/dialog-reserve.component';
import { Router } from '@angular/router';
import { InternService } from 'src/app/services/intern.service';
import { DialogResponseComponent } from './dialog-response/dialog-response.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { ReservesSendComponent } from '../reserves-send/reserves-send.component';

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.css']
})
export class ReservesComponent {
  constructor(private adminService: AdminService, private matDialog: MatDialog,  private router: Router, private internService: InternService, private userService: TokenStorageService, private teacherService: TeacherService) {
    this.routes = this.router.url
  }

  routes: string
  currentUser = this.userService.getUser()
  response: any = {subject: '', details: ''}
  reserve: any = {labName: '', description: ''}

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
    this.response = {subject: '', details: ''}
    this.reserve = {labName: '', description: ''}
    console.log(this.router.url)
    if (this.routes === '/intern-reserves') {
      this.internService.reserveIndex().subscribe((data) => {
        this.reserves = data as MatTableDataSource<any>
        this.reserves.paginator = this.paginator;
        this.reservesD = data
        console.log(data)
      })
    } else {
      this.adminService.reserveIndex().subscribe((data) => {
        this.reserves = data as MatTableDataSource<any>
        this.reserves.paginator = this.paginator;
        this.reservesD = data
        console.log(data)
      })
    }
  }

  reserveDetails(reserve: any) {
    this.matDialog.open(DialogReserveComponent, {data: reserve})
  }

  reserveResponse(id: number) {
    const dialogReference = this.matDialog.open(DialogResponseComponent, {data: this.response})
    dialogReference.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.ngOnInit();
      } else {
        this.internService.responseReserve(this.currentUser.id, id, result).subscribe(() => {
          this.ngOnInit();
        });
      }
    })
  }

  sendReserve() {
    const dialogReference = this.matDialog.open(ReservesSendComponent, {data: this.reserve})
    dialogReference.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.ngOnInit();
      } else {
        this.teacherService.saveReserve(this.currentUser.id, result).subscribe(() => {
          this.ngOnInit();
        });
      }
    });
  }
}
