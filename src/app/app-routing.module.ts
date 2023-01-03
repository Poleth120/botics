import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './COMPONENTS/register/register.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { ProfileComponent } from './COMPONENTS/profile/profile.component';
import { BoardUserComponent } from './COMPONENTS/board-user/board-user.component';
import { BoardModeratorComponent } from './COMPONENTS/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './COMPONENTS/board-admin/board-admin.component';
import { CreateUserComponent } from './COMPONENTS/create-user/create-user.component';
import { ListLComponent } from './COMPONENTS/list-l/list-l.component';
import { ListCComponent } from './COMPONENTS/list-c/list-c.component';
import { ListUserComponent } from './COMPONENTS/list-user/list-user.component';

import { CommentsComponent } from './COMPONENTS/comments/comments.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'admin-comentarios', component: CommentsComponent },
  { path: 'crear-nuevo-usuario', component: CreateUserComponent },
  { path: 'listar-nuevo-usuario', component: ListUserComponent },
  { path: 'laboratorios', component: ListLComponent },
  { path: 'laboratorios/lab-computadoras', component: ListCComponent },
  { path: 'lab-computadoras', component: ListCComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
