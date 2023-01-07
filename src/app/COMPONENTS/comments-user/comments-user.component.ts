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

@Component({
  selector: 'app-comments-user',
  templateUrl: './comments-user.component.html',
  styleUrls: ['./comments-user.component.css']
})
export class CommentsUserComponent {
  constructor(private matDialog: MatDialog, private teacherService: TeacherService, private userService: TokenStorageService, private router: Router, private administrativeService: AdministrativeService) {
    this.routes = this.router.url
  }

  displayedColumns: string[] = [
    'Id',
    'Asunto',
    'Acciones'
  ];

  comment: any = {subject: '',message: ''}
  currentUser = this.userService.getUser()

  comments = new MatTableDataSource<any>([]);
  commentsD: any;
  routes: string
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.comment = {subject: '', description: ''}
    if(this.routes === '/administrativo-comentarios') {
      this.administrativeService.indexCommentary(this.currentUser.id).subscribe((data) => {
        this.comments = data as MatTableDataSource<any>;
        this.comments.paginator = this.paginator
        this.commentsD = data;
      })
    } else {
      this.teacherService.indexCommentary(this.currentUser.id).subscribe((data) => {
        this.comments = data as MatTableDataSource<any>;
        this.comments.paginator = this.paginator
        this.commentsD = data;
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
        this.ngOnInit();
      } else {
        if (this.routes === '/administrativo-comentarios') {
          this.administrativeService.saveCommentary(this.currentUser.id, result).subscribe(() => {
            this.ngOnInit();
          })
        } else {
          this.teacherService.saveCommentary(this.currentUser.id, result).subscribe(() => {
            this.ngOnInit();
          });
        }
      }
    });
  }
}
