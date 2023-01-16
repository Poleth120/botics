import { Component, ViewChild } from '@angular/core';
import { ReservesSendComponent } from '../reserves-send/reserves-send.component';
import { TeacherService } from 'src/app/services/teacher.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DialogReserveComponent } from '../reserves/dialog-reserve/dialog-reserve.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-reserves-user',
  templateUrl: './reserves-user.component.html',
  styleUrls: ['./reserves-user.component.css']
})
export class ReservesUserComponent {
  reserve: any = {labName: '', description: ''}

  constructor(private matDialog: MatDialog, private teacherService: TeacherService, private userService: TokenStorageService) {}

  reserves: any;
  reservesD: any
  currentUser = this.userService.getUser()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchTerm = '';
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'Id',
    'Lab Name',
    'Acciones'
  ];


  ngOnInit() {
    this.reserve = {labName: '', description: ''}
    this.teacherService.indexReserve(this.currentUser.id).subscribe((data) => {
      this.reserves = new MatTableDataSource<any>(data)
      this.reserves.paginator = this.paginator;
      this.reservesD = data
      console.log(data)
    })
  }

  reserveDetails(reserve: any) {
    this.matDialog.open(DialogReserveComponent, {data: reserve})
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

  filterReserves(searchTerm: string) {
    this.reserves.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.reserves.filter = filterValue.trim().toLowerCase();
  }
}
