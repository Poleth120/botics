import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { DialogTicketComponent } from './dialog-ticket/dialog-ticket.component';
import { InternService } from 'src/app/services/intern.service';
import { Router } from '@angular/router';
import { DialogResponseComponent } from '../reserves/dialog-response/dialog-response.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MatSort } from '@angular/material/sort';
import { AlertComponent } from '../alert/alert.component';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent {

  longText = ``;


  constructor(
    private adminService: AdminService,
    private matDialog: MatDialog,
    private router: Router,
    private internService: InternService,
    private userService: TokenStorageService
  ) {
    this.routes = this.router.url;
  }
  currentUser = this.userService.getUser()

  routes: string;
  displayedColumns: string[] = [
    'Name',
    'Last Name',
    'Email',
    'Role',
    'Acciones',
  ];
  response: any = {subject: '', details: ''}

  tickets: any;
  ticketsD: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchTerm = '';
  @ViewChild(MatSort) sort!: MatSort;
//pasante y administratdor
  ngOnInit(): void {
    this.response = {subject: '', details: ''}
    if (this.routes === '/pasante-tickets') {
      this.longText='Visualizar los tickets de asistencia solicitados por parte del personal docente y administrativo. También, puedes visualizar las respuestas de los tickets de asistencia y a su vez responder los tickets que no han sido atendidos.';
      this.internService.ticketIndex().subscribe((data) => {
        this.tickets = new MatTableDataSource<any>(data);
        this.tickets.paginator = this.paginator
        this.ticketsD = data;
      },
      err => {
        const alertReference = this.matDialog.open(AlertComponent, {data: err})
      });
    } else {
      this.adminService.ticketIndex().subscribe((data) => {
        this.longText='Visualizar los tickets de asistencia solicitados por parte del personal docente y administrativo. También, puedes visualizar las respuestas de los tickets de asistencia.';


        this.tickets = new MatTableDataSource<any>(data);
        this.tickets.paginator = this.paginator
        this.ticketsD = data;
        console.log(data);
      },
      err => {
        const alertReference = this.matDialog.open(AlertComponent, {data: err})
      });
    }
  }

  ticketDetails(ticket: any) {
    this.matDialog.open(DialogTicketComponent, { data: ticket });
  }

  ticketResponse(id: number, subject: string) {
    const dialogReference = this.matDialog.open(DialogResponseComponent, {data: {subject: 'Respuesta a '+subject, details: ''}})
    dialogReference.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.ngOnInit();
      } else {
        this.internService.responseTicket(this.currentUser.id, id, result).subscribe((response) => {
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

  filterTickets(searchTerm: string) {
    this.tickets.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.tickets.filter = filterValue.trim().toLowerCase();
  }
}
