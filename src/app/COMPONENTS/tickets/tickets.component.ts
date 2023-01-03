import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { DialogTicketComponent } from './dialog-ticket/dialog-ticket.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  constructor(private adminService: AdminService, private matDialog: MatDialog) {}

  displayedColumns: string[] = [
    'Name',
    'Last Name',
    'Email',
    'Role',
    'Acciones',
  ];

  tickets =  new MatTableDataSource<any>([]);
  ticketsD: any
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.adminService.ticketIndex().subscribe((data) => {
      this.tickets = data as MatTableDataSource<any>
      this.ticketsD = data
      console.log(data)
    })
  }

  ticketDetails(ticket: any) {
    this.matDialog.open(DialogTicketComponent, {data: ticket})
  }
}
