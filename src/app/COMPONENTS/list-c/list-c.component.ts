import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

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

@Component({
  selector: 'app-list-c',
  templateUrl: './list-c.component.html',
  styleUrls: ['./list-c.component.css']
})
export class ListCComponent implements OnInit{
  constructor (private router: ActivatedRoute, private adminService: AdminService) {}
  labId!: any | number;

  displayedColumns: string[] = ['Id', 'Host Name', 'Código de bien CPU', 'Código de bien Monitor', 'Estado', 'Acciones'];

  computers: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.router.queryParams
      .subscribe(params => {
        console.log(JSON.stringify(params));
        this.labId = params;
      }
    );

    this.adminService.computerIndexLab(this.labId['id']).subscribe((data) => {
      console.log(data)
      this.computers = new MatTableDataSource<Computer>(data)
      this.computers.paginator = this.paginator;

    })

  }

  toggleChange(event: MatSlideToggleChange, id: number) {
    if (event.checked) {
      this.adminService.computerEnable(id).subscribe(() => {
        this.ngOnInit()
      });
    } else {
      this.adminService.computerDisable(id).subscribe(() => {
        this.ngOnInit()
      });
    }
  }

  delete(hostName: string) {
    this.adminService.computerDelete(hostName).subscribe(() => {
      this.ngOnInit()
    });
  }
}
