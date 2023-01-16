import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { RegisterComponent } from './COMPONENTS/register/register.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { ProfileComponent } from './COMPONENTS/profile/profile.component';
import { BoardAdminComponent } from './COMPONENTS/board-admin/board-admin.component';
import { BoardModeratorComponent } from './COMPONENTS/board-moderator/board-moderator.component';
import { BoardUserComponent } from './COMPONENTS/board-user/board-user.component';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ListLComponent } from './COMPONENTS/list-l/list-l.component';
import { CreateUserComponent } from './COMPONENTS/create-user/create-user.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListCComponent } from './COMPONENTS/list-c/list-c.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { SidenavComponent } from './COMPONENTS/sidenav/sidenav.component';
import { SidebarComponent } from './COMPONENTS/sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import  {PerfectScrollbarModule}  from 'ngx-perfect-scrollbar';
import  {PERFECT_SCROLLBAR_CONFIG}  from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface}  from 'ngx-perfect-scrollbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from './COMPONENTS/list-c/dialog/dialog.component';
import { DialogSaveComponent } from './COMPONENTS/list-c/dialog-save/dialog-save.component';
import { DialogLabComponent } from './COMPONENTS/list-c/dialog-lab/dialog-lab.component';

import { DialogChangeComponent } from './COMPONENTS/list-c/dialog-change/dialog-change.component';

import { ListUserComponent } from './COMPONENTS/list-user/list-user.component';
import { CommentsComponent } from './COMPONENTS/comments/comments.component';
import { DialogCommentComponent } from './COMPONENTS/comments/dialog-comment/dialog-comment.component';


import { MatTabsModule } from '@angular/material/tabs';
import { TicketsComponent } from './COMPONENTS/tickets/tickets.component';
import { DialogTicketComponent } from './COMPONENTS/tickets/dialog-ticket/dialog-ticket.component';
import { ReservesComponent } from './COMPONENTS/reserves/reserves.component';
import { DialogReserveComponent } from './COMPONENTS/reserves/dialog-reserve/dialog-reserve.component';
import { HistoryComponent } from './COMPONENTS/history/history.component';
import { DialogResponseComponent } from './COMPONENTS/reserves/dialog-response/dialog-response.component';
import { ReservesSendComponent } from './COMPONENTS/reserves-send/reserves-send.component';
import { ReservesUserComponent } from './COMPONENTS/reserves-user/reserves-user.component';
import { TicketsUserComponent } from './COMPONENTS/tickets-user/tickets-user.component';
import { TicketsSendComponent } from './COMPONENTS/tickets-send/tickets-send.component';
import { CommentsUserComponent } from './COMPONENTS/comments-user/comments-user.component';
import { CommentsSendComponent } from './COMPONENTS/comments-send/comments-send.component';
import { ListIComponent } from './COMPONENTS/list-i/list-i.component';
import { DialogShowComponent } from './COMPONENTS/list-i/dialog-show/dialog-show.component';
import { NetworkInterceptor } from './interceptors/network';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ListLComponent,
    CreateUserComponent,
    ListCComponent,
    SidenavComponent,
    SidebarComponent,
    DialogComponent,
    DialogSaveComponent,
    DialogLabComponent,
    DialogChangeComponent,
    ListUserComponent,
    CommentsComponent,
    DialogCommentComponent,
    TicketsComponent,
    DialogTicketComponent,
    ReservesComponent,
    DialogReserveComponent,
    HistoryComponent,
    DialogResponseComponent,
    ReservesSendComponent,
    ReservesUserComponent,
    TicketsUserComponent,
    TicketsSendComponent,
    CommentsUserComponent,
    CommentsSendComponent,
    ListIComponent,
    DialogShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    MatButtonModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [{provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
  {provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true}],
  bootstrap: [AppComponent]

})
export class AppModule { }
