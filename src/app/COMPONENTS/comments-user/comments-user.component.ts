import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TeacherService } from 'src/app/services/teacher.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { DialogCommentComponent } from '../comments/dialog-comment/dialog-comment.component';
import { CommentsSendComponent } from '../comments-send/comments-send.component';
import { Router } from '@angular/router';
import { AdministrativeService } from 'src/app/services/administrative.service';
import { MatSort } from '@angular/material/sort';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-comments-user',
  templateUrl: './comments-user.component.html',
  styleUrls: ['./comments-user.component.css']
})
export class CommentsUserComponent {
  commentsuD:any;

  longText = `Visualizar y enviar comentarios y/o sugerencias  y a su vez visualizar las respuestas de cada una de ellas.`;

  constructor(private matDialog: MatDialog, private teacherService: TeacherService, private userService: TokenStorageService, private router: Router, private administrativeService: AdministrativeService) {
    this.routes = this.router.url
  }

  displayedColumns: string[] = [

    'Asunto',
    'Acciones'
  ];

  comment: any = {subject: '',message: ''}
  currentUser = this.userService.getUser()

  comments: any;
  commentsD: any;
  routes: string
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchTerm = '';
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.comment = {subject: '', description: ''}
    if(this.routes === '/administrativo-comentarios') {
      this.administrativeService.indexCommentary(this.currentUser.id).subscribe((data) => {
        this.comments = new MatTableDataSource<any>(data);
        this.comments.paginator = this.paginator
        this.commentsD = data;
      },
      err => {
        const alertReference = this.matDialog.open(AlertComponent, {data: err})
      })
    } else {
      this.teacherService.indexCommentary(this.currentUser.id).subscribe((data) => {
        console.log(data)
        this.comments = new MatTableDataSource<any>(data);
        this.comments.paginator = this.paginator
        this.commentsD = data;
      },
      err => {
        const alertReference = this.matDialog.open(AlertComponent, {data: err})
      })
    }

  }


  commentDetails(comment: any) {
    this.matDialog.open(DialogCommentComponent, { data: comment });
  }

  sendComment() {
    const dialogReference = this.matDialog.open(CommentsSendComponent, {data: this.comment})
    dialogReference.afterClosed().subscribe((result) => {
      if (result === undefined) {
        console.log(result)
        this.ngOnInit();
      } else {
        if (this.routes === '/administrativo-comentarios') {
          console.log(this.currentUser.id)
          this.administrativeService.saveCommentary(this.currentUser.id, result).subscribe((response) => {
            const alertReference = this.matDialog.open(AlertComponent, {data: response})
            alertReference.afterClosed().subscribe(() => {
              this.ngOnInit();
            })
          },
          err => {
            console.log(err)
            const alertReference = this.matDialog.open(AlertComponent, {data: err})
          })
        } else {
          console.log(this.currentUser.id)
          this.teacherService.saveCommentary(this.currentUser.id, result).subscribe((response) => {
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
      }
    });
  }

  filterComments(searchTerm: string) {
    this.comments.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.comments.filter = filterValue.trim().toLowerCase();
  }
}
