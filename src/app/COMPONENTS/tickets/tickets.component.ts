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
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent {
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

  tickets = new MatTableDataSource<any>([]);
  ticketsD: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.response = {subject: '', details: ''}
    if (this.routes === '/pasante-tickets') {
      this.internService.ticketIndex().subscribe((data) => {
        this.tickets = data as MatTableDataSource<any>;
        this.tickets.paginator = this.paginator
        this.ticketsD = data;
      });
    } else {
      this.adminService.ticketIndex().subscribe((data) => {
        this.tickets = data as MatTableDataSource<any>;
        this.tickets.paginator = this.paginator
        this.ticketsD = data;
        console.log(data);
      });
    }
  }

  ticketDetails(ticket: any) {
    this.matDialog.open(DialogTicketComponent, { data: ticket });
  }

  ticketResponse(id: number) {
    const dialogReference = this.matDialog.open(DialogResponseComponent, {data: this.response})
    dialogReference.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.ngOnInit();
      } else {
        this.internService.responseTicket(this.currentUser.id, id, result).subscribe(() => {
          this.ngOnInit();
        });
      }
    })
  }
}
