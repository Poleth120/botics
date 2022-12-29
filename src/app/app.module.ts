import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import  {PerfectScrollbarModule}  from 'ngx-perfect-scrollbar';
import  {PERFECT_SCROLLBAR_CONFIG}  from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface}  from 'ngx-perfect-scrollbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from './COMPONENTS/list-c/dialog/dialog.component';
import { DialogSaveComponent } from './COMPONENTS/list-c/dialog-save/dialog-save.component';

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
    MatDialogModule
  ],
  providers: [{provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule { }
