import { Component, OnInit, ViewChild, Injectable, ChangeDetectorRef, Inject, SimpleChanges, Input, OnChanges, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { DialogSaveComponent } from './dialog-save/dialog-save.component';
import { DialogLabComponent } from './dialog-lab/dialog-lab.component';
import { DialogChangeComponent } from './dialog-change/dialog-change.component';
import { MatSort } from '@angular/material/sort';
import { AlertComponent } from '../alert/alert.component';
import { AlertCCComponent } from './alert-c/alert-c.component';



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
export class ListCComponent implements OnInit, OnChanges  {


  longText=''

  constructor(
    private router: ActivatedRoute,
    private adminService: AdminService,
    private matDialog: MatDialog,
    private routerF: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {this.FLAG = true,
    this.routes = this.routerF.url}
  @Input() labId: any = {id: 500};

  FLAG: boolean
  displayedColumns: string[] = [

    'Host Name',
    'Serial del CPU',
    'Serial del Monitor',
    "Código del bien",
    'Estado',
    'Acciones',
  ];

  computers: any;

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
  routes: string;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchTerm = '';
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit() {
    this.computersSub?.unsubscribe()
    this.routerSub?.unsubscribe()
    this.routerSub = this.router.params.subscribe((params) => {

      console.log(params);

      this.labId = params;
      console.log(this.labId)
      if (this.routerF.url === '/lab-computadoras'){
        this.labId = {id: 500};
        console.log(this.labId)
        this.longText = `Visualizar los equipos registrados y también puedes añadir nuevos equipos y realizar otras acciones, tales como: dar de baja algún equipo.`;

      } else {
        this.labId = params;
        console.log(this.labId)
        this.refreshComponent()
        this.longText = `Visualizar los equipos asignados a este laboratorio y también puedes registrar nuevos equipos.`;
      }
    })
    this.computers =  new MatTableDataSource<Computer>([]);
    console.log(this.labId)
    if (this.routerF.url === '/lab-computadoras') {
      this.computersSub = this.adminService.computerIndex().subscribe((data) => {
        console.log(data);
        this.computers = new MatTableDataSource<Computer>(data);
        this.computers.paginator = this.paginator;
      },
      err => {
        const alertReference = this.matDialog.open(AlertComponent, {data: err})
      });
    } else {
      this.computersSub = this.adminService.computerIndexLab(this.labId['id']).subscribe((data) => {
        console.log(data);
        this.computers = new MatTableDataSource<Computer>(data);
        this.computers.paginator = this.paginator;
        console.log(this.computers);
      },
      err => {
        const alertReference = this.matDialog.open(AlertComponent, {data: err})
      });
    }
  }



  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)

  }

  refreshComponent() {
    this.computersSub = this.adminService.computerIndexLab(this.labId['id']).subscribe((data) => {
      console.log(data);
      this.computers = new MatTableDataSource<Computer>(data);
      this.computers.paginator = this.paginator;
      console.log(this.computers);
    },
    err => {
      const alertReference = this.matDialog.open(AlertComponent, {data: err})
    });
  }

  openDialogeShow(computer: any) {
    const dialogReference = this.matDialog.open(DialogComponent, {
      data: { data: computer, edit: true },
    });
  }

  filterComputers(searchTerm: string) {
    this.computers.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.computers.filter = filterValue.trim().toLowerCase();
  }

  openDialogeEdit(computer: any) {
    const dialogReference = this.matDialog.open(DialogComponent, {
      data: { data: computer, edit: false },
    });
    dialogReference.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.ngOnInit();
      } else {
        this.adminService.computerSave(result).subscribe((response) => {
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

  openDialogeCreate() {
    const dialogReference = this.matDialog.open(DialogSaveComponent, {
      data: { data: this.computer, edit: false },
    });
    dialogReference.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.ngOnInit();
      } else {
        this.adminService.computerSave(result).subscribe((result) => {
          this.adminService.computerIndex().subscribe((data) => {
            console.log(data.at(-1));
            this.adminService
              .computerAssign(this.labId.id, data.at(-1).id)
              .subscribe((response) => {
                const alertReference = this.matDialog.open(AlertComponent, {data: response})
                alertReference.afterClosed().subscribe(() => {
                  this.ngOnInit();
                })
              },
              err => {
                console.log(err)
                const alertReference = this.matDialog.open(AlertComponent, {data: err})
              });
          },
          err => {
            console.log(err)
            const alertReference = this.matDialog.open(AlertComponent, {data: err})
          });
        },
        err => {
          console.log(err)
          const alertReference = this.matDialog.open(AlertComponent, {data: err})
        });
      }
    });
  }

  openDialogeCreateOnly() {
    const dialogReference = this.matDialog.open(DialogSaveComponent, {
      data: { data: this.computer, edit: false },
    });
    dialogReference.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.ngOnInit();
      } else {
        this.adminService.computerSave(result).subscribe((response) => {
          const alertReference = this.matDialog.open(AlertComponent, {data: response})
          alertReference.afterClosed().subscribe(() => {
            this.ngOnInit();
          });
        },
        err => {
          console.log(err)
          const alertReference = this.matDialog.open(AlertComponent, {data: err})
        });
      }
    });
  }

  openDialogeChange(idComputer: number, labReference: number) {
    const dialogReference = this.matDialog.open(DialogLabComponent,
      { data: { idComputer: idComputer, idLab1: labReference, idLab2: 0, changeDetails: ''}});
      dialogReference.afterClosed().subscribe((result) => {
        if (result === undefined) {
          this.ngOnInit();
        } else {
          this.adminService.computerReAssign(result.idLab1, result.idLab2, result.idComputer, result.changeDetails)
          .subscribe((response) => {
            const alertReference = this.matDialog.open(AlertComponent, {data: response})
            alertReference.afterClosed().subscribe(() => {
              this.ngOnInit();
            });
          },
          err => {
            console.log(err)
            const alertReference = this.matDialog.open(AlertComponent, {data: err})
          })
        }
      })
  }

  openDialogeAssign(idComputer: number, labReference: number) {
    const dialogReference = this.matDialog.open(DialogLabComponent,
      { data: { idComputer: idComputer, idLab1: labReference, idLab2: 0, changeDetails: ''}});
      dialogReference.afterClosed().subscribe((result) => {
        if (result === undefined) {
          this.ngOnInit();
        } else {
          this.adminService.computerAssign(result.idLab1, result.idComputer)
          .subscribe((response) => {
            const alertReference = this.matDialog.open(AlertComponent, {data: response})
            alertReference.afterClosed().subscribe(() => {
              this.ngOnInit();
            })
          },
          err => {
            console.log(err)
            const alertReference = this.matDialog.open(AlertComponent, {data: err})
          })
        }
      })
  }

  toggleChange(event: MatSlideToggleChange, id: number) {
    if (event.checked) {
      this.adminService.computerEnable(id).subscribe((response) => {
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
      const dialogReference = this.matDialog.open(AlertCCComponent)
      dialogReference.afterClosed().subscribe((result) => {
        if (result) {
          this.adminService.computerDisable(id).subscribe((response) => {
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

  unassign(idComputer: number, labReference: number) {
    const dialogReference = this.matDialog.open(DialogChangeComponent,
      { data: { idComputer: idComputer, idLab: labReference, changeDetails: ''}});
    dialogReference.afterClosed().subscribe((result) => {
      if (result) {
        this.adminService
          .computerUnAssign(result.idLab, result.idComputer, result.changeDetails)
          .subscribe((response) => {
            const alertReference = this.matDialog.open(AlertComponent, {data: response})
            alertReference.afterClosed().subscribe(() => {
              this.ngOnInit();
            });
          },
          err => {
            console.log(err)
            const alertReference = this.matDialog.open(AlertComponent, {data: err})
          });
      }
    })

  }

  delete(idComputer: number, hostName: string) {
    this.adminService
      .computerUnAssign(this.labId.id, idComputer, 'Borrar.')
      .subscribe(() => {
        this.adminService.computerDelete(hostName).subscribe((response) => {
          const alertReference = this.matDialog.open(AlertComponent, {data: response})
          alertReference.afterClosed().subscribe(() => {
            this.ngOnInit();
          })
        },
        err => {
          console.log(err)
          const alertReference = this.matDialog.open(AlertComponent, {data: err})
        });
      },
      err => {
        console.log(err)
        const alertReference = this.matDialog.open(AlertComponent, {data: err})
      });
  }
}
