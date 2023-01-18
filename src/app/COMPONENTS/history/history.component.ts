import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  constructor(private adminService: AdminService) {}

  longText = `Visualizar el historial de los equipos de los laboratorios. `;

  history: any
  searchTermH = '';
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumnsH: string[] = [
    'Host Name',
    'Laboratorio',
    'Fecha',
    'Detalle'
  ];

  ngOnInit(): void {
    this.adminService.historyIndex().subscribe((data) => {
      this.history = new MatTableDataSource<any>(data);
      this.history.paginator = this.paginator
      console.log(this.history)
    })
  }

  filterHistory(searchTerm: string) {
    this.history.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.history.filter = filterValue.trim().toLowerCase();
  }

}
