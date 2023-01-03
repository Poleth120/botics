import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { DialogCommentComponent } from './dialog-comment/dialog-comment.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  constructor(private adminService: AdminService, private matDialog: MatDialog) {}

  displayedColumns: string[] = [
    'Name',
    'Last Name',
    'Email',
    'Role',
    'Acciones',
  ];

  comments =  new MatTableDataSource<any>([]);
  commentsD: any
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.adminService.commentIndex().subscribe((data) => {
      this.comments = data as MatTableDataSource<any>
      this.commentsD = data
      console.log(data)
    })

  }

  commentDetails(comment: any) {
    this.matDialog.open(DialogCommentComponent, {data: comment})
  }


}
