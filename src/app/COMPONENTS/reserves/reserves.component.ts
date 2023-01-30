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
import { MatSort } from '@angular/material/sort';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.css']
})
export class ReservesComponent {

  longText = ` `;



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

  reserves: any;
  reservesD: any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchTerm = '';
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.response = {subject: '', details: ''}
    this.reserve = {labName: '', description: ''}
    console.log(this.router.url)
    if (this.routes === '/intern-reserves') {
      this. longText = `Visualizar las reservas de laboratorios enviadas por parte del personal docente y a su vez responder las reservas que no han sido atentidas. `;

      this.internService.reserveIndex().subscribe((data) => {
        this.reserves = new MatTableDataSource<any>(data)
        this.reserves.paginator = this.paginator;
        this.reservesD = data
        console.log(data)
      },
      err => {
        const alertReference = this.matDialog.open(AlertComponent, {data: err})
      })
    } else {
      this.adminService.reserveIndex().subscribe((data) => {
        this. longText = `Visualizar las reservas de laboratorios enviadas por parte del personal docente. `;
        this.reserves = new MatTableDataSource<any>(data)
        this.reserves.paginator = this.paginator;
        this.reservesD = data
        console.log(data)
      },
      err => {
        const alertReference = this.matDialog.open(AlertComponent, {data: err})
      })
    }
  }

  reserveDetails(reserve: any) {
    this.matDialog.open(DialogReserveComponent, {data: reserve})
  }

  reserveResponse(id: number, labName: string) {
    const dialogReference = this.matDialog.open(DialogResponseComponent, {data: {subject: 'Respuesta a '+labName, details: ''}})
    dialogReference.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.ngOnInit();
      } else {
        console.log(result)
        this.internService.responseReserve(this.currentUser.id, id, result).subscribe((response) => {
          const alertReference = this.matDialog.open(AlertComponent, {data: response})
          alertReference.afterClosed().subscribe(() => {
            this.ngOnInit();
          })
        },
        err => {
          console.log(err)
          const alertReference = this.matDialog.open(AlertComponent, {data: err})
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
        this.teacherService.saveReserve(this.currentUser.id, result).subscribe((response) => {
          const alertReference = this.matDialog.open(AlertComponent, {data: response})
          alertReference.afterClosed().subscribe(() => {
            this.ngOnInit();
          })
        },
        err => {
          console.log(err)
          const alertReference = this.matDialog.open(AlertComponent, {data: err})
        });
      }
    });
  }

  filterReserves(searchTerm: string) {
    this.reserves.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.reserves.filter = filterValue.trim().toLowerCase();
  }
}
