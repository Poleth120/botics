import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { DialogCommentComponent } from './dialog-comment/dialog-comment.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { AdministrativeService } from 'src/app/services/administrative.service';
import { DialogResponseComponent } from '../reserves/dialog-response/dialog-response.component';
import { MatSort } from '@angular/material/sort';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  longText=''



  constructor(private adminService: AdminService, private matDialog: MatDialog, private userService: TokenStorageService, private router: Router, private administrativeService: AdministrativeService) {
    this.routes = this.router.url
  }

  displayedColumns: string[] = [
    'Name',
    'Last Name',
    'Email',
    'Role',
    'Acciones',
  ];

  comments: any;
  commentsD: any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchTerm = '';
  @ViewChild(MatSort) sort!: MatSort;

  routes: string
  currentUser = this.userService.getUser()
  response: any = {subject: '', details: ''}

  ngOnInit(): void {
    this.response = {subject: '', details: ''}
    if (this.routes === '/administrativo-comentarios-res') {
      this.longText = `Visualizar los comentarios y/o sugerencias realizadas por parte del personal docente y administrativo. También, puedes visualizar las respuestas y a su vez responder los comentarios y/o sugerencias que no han sido atendidos.`;
      this.administrativeService.indexNoCommentary(this.currentUser.id).subscribe((data) => {
        this.comments = new MatTableDataSource<any>(data)
        this.comments.paginator = this.paginator
        this.commentsD = data
        console.log(data)
      },
      err => {
        const alertReference = this.matDialog.open(AlertComponent, {data: err})
      })
    } else {
      this.longText = `Visualizar los comentarios y/o sugerencias realizadas por parte del personal docente y administrativo. También, puedes visualizar las respuestas de los comentarios y/o sugerencias.`;
      this.adminService.commentIndex().subscribe((data) => {
        this.comments = new MatTableDataSource<any>(data)
        this.comments.paginator = this.paginator
        this.commentsD = data
        console.log(data)
      },
      err => {
        const alertReference = this.matDialog.open(AlertComponent, {data: err})
      })
    }
  }

  commentDetails(comment: any) {
    this.matDialog.open(DialogCommentComponent, {data: comment})
  }

  commentResponse(id: number) {
    const dialogReference = this.matDialog.open(DialogResponseComponent, {data: this.response})
    dialogReference.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.ngOnInit();
      } else {
        this.administrativeService.responseCommentary(this.currentUser.id, id, result).subscribe((response) => {
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
    })
  }

  filterComments(searchTerm: string) {
    this.comments.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.comments.filter = filterValue.trim().toLowerCase();
  }
}
