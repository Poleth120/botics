import { Component, OnInit, ViewChild, Injectable, ChangeDetectorRef, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { DialogSaveComponent } from './dialog-save/dialog-save.component';
import { DialogLabComponent } from './dialog-lab/dialog-lab.component';

export interface Computer {
  id: number;
  hostName: string;
  serialMonitor: string;
  serialKeyboard: string;
  serialCpu: string;
  codeMonitor: string;
  codeKeyboard: string;
  codeCpu: string;
  state: boolean;
  model: string;
  hardDrive: string;
  ram: string;
  processor: string;
  operativeSystem: string;
  details: string;
  observations: string;
  labReference: number;
}

export interface ComputerC {
  hostName: string | null;
  serialMonitor: string | null;
  serialKeyboard: string | null;
  serialCpu: string | null;
  codeMonitor: string | null;
  codeKeyboard: string | null;
  codeCpu: string | null;
  state: boolean;
  model: string | null;
  hardDrive: string | null;
  ram: string | null;
  processor: string | null;
  operativeSystem: string | null;
  details: string | null;
  observations: string | null;
  labReference: number;
}


@Component({
  selector: 'app-list-c',
  templateUrl: './list-c.component.html',
  styleUrls: ['./list-c.component.css'],
})
@Injectable({
  providedIn: 'root'
})
export class ListCComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private adminService: AdminService,
    private matDialog: MatDialog,
    private routerF: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {this.FLAG = true}
  labId!: any | number;

  FLAG: boolean
  displayedColumns: string[] = [
    'Id',
    'Host Name',
    'Serial del CPU',
    'Serial del Monitor',
    'Estado',
    'Acciones',
  ];

  computers =  new MatTableDataSource<Computer>([]);

  computer: ComputerC = {
    hostName: null,
    serialMonitor: null,
    serialKeyboard: null,
    serialCpu: null,
    codeMonitor: null,
    codeKeyboard: null,
    codeCpu: null,
    state: true,
    model: null,
    hardDrive: null,
    ram: null,
    processor: null,
    operativeSystem: null,
    details: null,
    observations: null,
    labReference: 0,
  };

  computerSave: any;
  computersSub: any;
  routerSub: any;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.computersSub?.unsubscribe()
    this.routerSub?.unsubscribe()
    this.computers =  new MatTableDataSource<Computer>([]);
    this.routerSub = this.router.queryParams.subscribe((params) => {
      console.log(JSON.stringify(params));
      this.labId = params;
    });
    console.log(this.labId)
    if (!this.labId.id) {
      this.computersSub = this.adminService.computerIndex().subscribe((data) => {
        console.log(data);
        this.computers = data as MatTableDataSource<Computer>;
        this.computers.paginator = this.paginator;
      });
    } else {
      this.computersSub = this.adminService.computerIndexLab(this.labId['id']).subscribe((data) => {
        console.log(data);
        this.computers = data as MatTableDataSource<Computer>;
        this.computers.paginator = this.paginator;
        console.log(this.computers);
      });
    }
  }

  refreshComponent(id: number) {
    this.computersSub?.unsubscribe()
    this.routerSub?.unsubscribe()
    this.routerF.navigate(['laboratorios/lab-computadoras'], { queryParams: { id: id }})
  }

  openDialogeShow(computer: any) {
    const dialogReference = this.matDialog.open(DialogComponent, {
      data: { data: computer, edit: true },
    });
  }

  openDialogeEdit(computer: any) {
    const dialogReference = this.matDialog.open(DialogComponent, {
      data: { data: computer, edit: false },
    });
    dialogReference.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.ngOnInit();
      } else {
        this.adminService.computerSave(result).subscribe(() => {});
      }
    });
  }

  openDialogeCreate() {
    const dialogReference = this.matDialog.open(DialogSaveComponent, {
      data: { data: this.computer, edit: false },
    });
    dialogReference.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.ngOnInit();
      } else {
        this.adminService.computerSave(result).subscribe(() => {
          this.adminService.computerIndex().subscribe((data) => {
            console.log(data.at(-1));
            this.adminService
              .computerAssign(this.labId.id, data.at(-1).id)
              .subscribe(() => {
                this.ngOnInit();
              });
          });
        });
      }
    });
  }

  openDialogeChange(idComputer: number) {
    const dialogReference = this.matDialog.open(DialogLabComponent,
      { data: { idComputer: idComputer, idLab1: this.labId.id, idLab2: 0}});
      dialogReference.afterClosed().subscribe((result) => {
        if (result === undefined) {
          this.ngOnInit();
        } else {
          this.adminService.computerReAssign(result.idLab1, result.idLab2, result.idComputer, "cambio")
          .subscribe(() => {
            this.ngOnInit();
          })
        }
      })
  }

  toggleChange(event: MatSlideToggleChange, id: number) {
    if (event.checked) {
      this.adminService.computerEnable(id).subscribe(() => {
        this.ngOnInit();
      });
    } else {
      this.adminService.computerDisable(id).subscribe(() => {
        this.ngOnInit();
      });
    }
  }

  unassign(idComputer: number) {
    this.adminService
      .computerUnAssign(this.labId.id, idComputer, 'Computador dañado.')
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  delete(idComputer: number, hostName: string) {
    this.adminService
      .computerUnAssign(this.labId.id, idComputer, 'Borrar.')
      .subscribe(() => {
        this.adminService.computerDelete(hostName).subscribe(() => {
          this.ngOnInit();
        });
      });
  }
}
