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
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ListLComponent } from './COMPONENTS/list-l/list-l.component';
import { CreateUserComponent } from './COMPONENTS/create-user/create-user.component';@NgModule({
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
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
