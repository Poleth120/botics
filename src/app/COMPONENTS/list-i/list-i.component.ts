import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { DialogShowComponent } from './dialog-show/dialog-show.component';
import { MatSort } from '@angular/material/sort';
import { AlertComponent } from '../alert/alert.component';
import { AlertCComponent } from './alert-c/alert-c.component';

@Component({
  selector: 'app-list-i',
  templateUrl: './list-i.component.html',
  styleUrls: ['./list-i.component.css']
})
export class ListIComponent {
  constructor(private adminService: AdminService, private matDialog: MatDialog) {}
  longText = `Visualizar una lista de los pasantes que han sido registrados y puedes habilitar o deshabilitar alguno de ellos, según se requiera:`;


  displayedColumns: string[] = [
    'Id',
    'Nombre de usuario',
    'Email',
    'Estado',
    'Acciones',
  ];
  interns: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchTerm = '';
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.adminService.internIndex().subscribe((data) => {
      this.interns = new MatTableDataSource<any>(data)
      this.interns.paginator = this.paginator
    },
    err => {
      const alertReference = this.matDialog.open(AlertComponent, {data: err})
    });
  }

  openDialogeShow(intern: any) {
    const dialogReference = this.matDialog.open(DialogShowComponent, {
      data: intern,
    });
  }

  toggleChange(event: MatSlideToggleChange, id: number) {
    if (event.checked) {
      this.adminService.internEnable(id).subscribe((response) => {
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
      const dialogReference = this.matDialog.open(AlertCComponent)
      dialogReference.afterClosed().subscribe((result) => {
        if (result) {
          this.adminService.internDisable(id).subscribe((response) => {
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
          this.ngOnInit()
        }
      })
    }
  }


  filterInterns(searchTerm: string) {
    this.interns.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.interns.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.interns.sort = this.sort;
  }

  onMatSortChange() {
    this.interns.sort = this.sort;
  }


}
