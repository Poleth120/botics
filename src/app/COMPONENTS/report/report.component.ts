import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { AdminService } from 'src/app/services/admin.service';
const htmlToPdfmake = require('html-to-pdfmake');
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  reportD: any;

  constructor(private adminService: AdminService) {}

  @ViewChild('pdfTableC')
  pdfTableC!: ElementRef;

  @ViewChild('pdfTableH')
  pdfTableH!: ElementRef;

  searchTerm = '';
  searchTermH = '';
  @ViewChild(MatSort) sort!: MatSort;

  longText = `Visualizar el reporte de las computadoras ingresadas. `;
  computers: any;
  history: any;

  displayedColumnsC: string[] = [
    'Host Name',
    'Serial del CPU',
    'Serial del Monitor',
    'Modelo',
    'Procesador',
    'Ram',
    'Disco duro',
  ];

  displayedColumnsH: string[] = [
    'Host Name',
    'Laboratorio',
    'Fecha',
    'Detalle',
  ];

  ngOnInit() {
    this.adminService.historyIndex().subscribe((data) => {
      this.history = new MatTableDataSource<any>(data);
    });
    this.adminService.computerIndex().subscribe((data) => {
      this.computers = new MatTableDataSource<any>(data);
    });
  }

  now = new Date();
  public async downloadAsPDFC() {
    const pdfTable = this.pdfTableC.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = {
      content: [
        {
          image: await this.getBase64ImageFromURL(
            '../assets/img/reporte-compu.png'
          ),
          fit: [520, 520],
        },
        { text: 'Fecha: ' + this.now },
        html,
      ],
    };
    pdfMake
      .createPdf(documentDefinition)
      .download('reporte-computadoras-' + this.now + '.pdf');
  }

  public async downloadAsPDFH() {
    const pdfTable = this.pdfTableH.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = {
      content: [
        {
          image: await this.getBase64ImageFromURL(
            '../assets/img/reporte-hist.png'
          ),
          fit: [520, 520],
        },
        { text: 'Fecha: ' + this.now },
        html,
      ],
    };
    pdfMake
      .createPdf(documentDefinition)
      .download('reporte-historial-' + this.now + '.pdf');
  }

  getBase64ImageFromURL(url: string) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');

      img.onload = () => {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL('image/png');

        resolve(dataURL);
      };

      img.onerror = (error) => {
        reject(error);
      };

      img.src = url;
    });
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
