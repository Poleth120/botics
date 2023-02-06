import { Component, ViewChild } from '@angular/core';
import { DialogTicketComponent } from '../tickets/dialog-ticket/dialog-ticket.component';
import { MatDialog } from '@angular/material/dialog';
import { TeacherService } from 'src/app/services/teacher.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TicketsSendComponent } from '../tickets-send/tickets-send.component';
import { Router } from '@angular/router';
import { AdministrativeService } from 'src/app/services/administrative.service';
import { MatSort } from '@angular/material/sort';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-tickets-user',
  templateUrl: './tickets-user.component.html',
  styleUrls: ['./tickets-user.component.css']
})
export class TicketsUserComponent {

  longText = `Visualizar y enviar tickets de asistencia.`;


  constructor(private matDialog: MatDialog, private teacherService: TeacherService, private userService: TokenStorageService, private router: Router, private administrativeService: AdministrativeService) {
    this.routes = this.router.url
  }

  displayedColumns: string[] = [

    'Asunto',
    'Acciones'
  ];

  routes: string

  ticket: any = {subject: '', description: ''}
  currentUser = this.userService.getUser()

  tickets: any;
  ticketsD: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchTerm = '';
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.ticket = {subject: '', description: ''}
    if(this.routes === '/administrativo-tickets') {
      this.administrativeService.indexTicket(this.currentUser.id).subscribe((data) => {
        this.tickets = new MatTableDataSource<any>(data);
        this.tickets.paginator = this.paginator
        this.ticketsD = data;
      },
      err => {
        const alertReference = this.matDialog.open(AlertComponent, {data: err})
      })
    } else {
      this.teacherService.indexTicket(this.currentUser.id).subscribe((data) => {
        this.tickets = new MatTableDataSource<any>(data);
        this.tickets.paginator = this.paginator
        this.ticketsD = data;
      },
      err => {
        const alertReference = this.matDialog.open(AlertComponent, {data: err})
      });
    }


  }


  ticketDetails(ticket: any) {
    this.matDialog.open(DialogTicketComponent, { data: ticket });
  }

  sendTicket() {
    const dialogReference = this.matDialog.open(TicketsSendComponent, {data: this.ticket})
    dialogReference.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.ngOnInit();
      } else {
        if (this.routes === '/administrativo-tickets') {
          this.administrativeService.saveTicket(this.currentUser.id, result).subscribe((response) => {
            const alertReference = this.matDialog.open(AlertComponent, {data: response})
            alertReference.afterClosed().subscribe(() => {
              this.ngOnInit();
            })
          },
          err => {
            console.log(err)
            const alertReference = this.matDialog.open(AlertComponent, {data: err})
          });
        } else {
          this.teacherService.saveTicket(this.currentUser.id, result).subscribe((response) => {
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
      }
    });
  }

  filterTickets(searchTerm: string) {
    this.tickets.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.tickets.filter = filterValue.trim().toLowerCase();
  }

}
