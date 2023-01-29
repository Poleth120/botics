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
import { TicketsComponent } from './COMPONENTS/tickets/tickets.component';
import { ReservesComponent } from './COMPONENTS/reserves/reserves.component';
import { HistoryComponent } from './COMPONENTS/history/history.component';
import { ReservesSendComponent } from './COMPONENTS/reserves-send/reserves-send.component';
import { ReservesUserComponent } from './COMPONENTS/reserves-user/reserves-user.component';
import { TicketsUserComponent } from './COMPONENTS/tickets-user/tickets-user.component';
import { CommentsUserComponent } from './COMPONENTS/comments-user/comments-user.component';
import { ListIComponent } from './COMPONENTS/list-i/list-i.component';
import { ReportComponent } from './COMPONENTS/report/report.component';
import { RecuperarComponent } from './COMPONENTS/recuperar/recuperar.component';
import { PasswrdComponent } from './COMPONENTS/passwrd/passwrd.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'admin-comentarios', component: CommentsComponent },
  { path: 'admin-tickets', component: TicketsComponent },
  { path: 'admin-reserves', component: ReservesComponent },
  { path: 'intern-reserves', component: ReservesComponent },
  { path: 'pasantes-listar', component: ListIComponent },
  { path: 'admin-report', component: ReportComponent },
  { path: 'administrativo-comentarios-res', component: CommentsComponent },
  { path: 'profesor-reservas', component: ReservesUserComponent },
  { path: 'profesor-comentarios', component: CommentsUserComponent },
  { path: 'profesor-tickets', component: TicketsUserComponent },
  { path: 'administrativo-tickets', component: TicketsUserComponent },
  { path: 'administrativo-comentarios', component: CommentsUserComponent },
  { path: 'pasante-tickets', component: TicketsComponent },
  { path: 'teacher-reserves-send', component: ReservesSendComponent },
  { path: 'crear-nuevo-usuario', component: CreateUserComponent },
  { path: 'admin-history', component: HistoryComponent },
  { path: 'listar-nuevo-usuario', component: ListUserComponent },
  { path: 'laboratorios', component: ListLComponent },
  { path: 'laboratorios/lab-computadoras/:id', component: ListCComponent },
  { path: 'laboratorios/lab-computadoras', component: ListCComponent },
  { path: 'lab-computadoras', component: ListCComponent },
  { path: 'restablecer-contraseña', component: RecuperarComponent},
  { path: 'auth/nueva-contraseña', component: PasswrdComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
