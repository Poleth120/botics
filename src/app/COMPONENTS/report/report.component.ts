import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { AdminService } from 'src/app/services/admin.service';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  constructor(private adminService: AdminService) {}

  @ViewChild('pdfTableC')
  pdfTableC!: ElementRef;

  @ViewChild('pdfTableH')
  pdfTableH!: ElementRef;

  searchTerm = '';
  searchTermH = '';
  @ViewChild(MatSort) sort!: MatSort;

  longText = ''
  computers: any;
  history: any;

  displayedColumnsC: string[] = [
    'Host Name',
    'Serial del CPU',
    'Serial del Monitor',
    "Modelo",
    "Procesador",
    "Ram",
    "Disco duro"
  ];

  displayedColumnsH: string[] = [
    'Host Name',
    'Laboratorio',
    'Fecha',
    'Detalle'
  ];
 
  ngOnInit() {
    this.adminService.historyIndex().subscribe((data) => {
     this.history = new MatTableDataSource<any>(data);
    })
    this.adminService.computerIndex().subscribe((data) => {
      this.computers = new MatTableDataSource<any>(data);
    })
  }

  public downloadAsPDFC() {
    const pdfTable = this.pdfTableC.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();

  }

  public downloadAsPDFH() {
    const pdfTable = this.pdfTableH.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();

  }

  filterComputers(searchTerm: string) {
    this.computers.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.computers.filter = filterValue.trim().toLowerCase();
  }

  filterHistory(searchTerm: string) {
    this.history.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.history.filter = filterValue.trim().toLowerCase();
  }
}
