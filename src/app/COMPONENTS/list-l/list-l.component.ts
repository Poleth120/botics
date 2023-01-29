import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AlertComponent } from '../alert/alert.component';
import { MatDialog } from '@angular/material/dialog';

export interface Lab{
  id: number;
  name: string;

  image: string;
}

@Component({
  selector: 'app-list-l',
  templateUrl: './list-l.component.html',
  styleUrls: ['./list-l.component.css']
})
export class ListLComponent implements OnInit{


  longText = `Visualizar los laboratorios registrados y acceder al listado de computadoras de cada laboratorio. `;


  constructor(private adminService: AdminService, private router: Router, private matDialog: MatDialog) {

  }

  labs!: [Lab];

  ngOnInit(): void {
    this.adminService.labIndex().subscribe((data) => {
      this.labs = data
    },
    err => {
      const alertReference = this.matDialog.open(AlertComponent, {data: err})
    });
    console.log(this.labs)
  }

  navigate(id: number) {
    this.router.navigateByUrl('laboratorios/lab-computadoras/'+id)
  }

}
