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
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  //{ path: 'user', component: BoardUserComponent },
  //{ path: 'mod', component: BoardModeratorComponent },
  //{ path: 'admin', component: BoardAdminComponent, canActivate:[AuthGuard] },
  { path: 'admin-comentarios', component: CommentsComponent, canActivate:[AuthGuard] },
  { path: 'admin-tickets', component: TicketsComponent, canActivate:[AuthGuard] },
  { path: 'admin-reserves', component: ReservesComponent, canActivate:[AuthGuard] },
  { path: 'intern-reserves', component: ReservesComponent, canActivate:[AuthGuard] },
  { path: 'pasantes-listar', component: ListIComponent, canActivate:[AuthGuard] },
  { path: 'admin-report', component: ReportComponent, canActivate:[AuthGuard] },
  { path: 'administrativo-comentarios-res', component: CommentsComponent, canActivate:[AuthGuard] },
  { path: 'profesor-reservas', component: ReservesUserComponent, canActivate:[AuthGuard] },
  { path: 'profesor-comentarios', component: CommentsUserComponent, canActivate:[AuthGuard] },
  { path: 'profesor-tickets', component: TicketsUserComponent, canActivate:[AuthGuard] },
  { path: 'administrativo-tickets', component: TicketsUserComponent, canActivate:[AuthGuard] },
  { path: 'administrativo-comentarios', component: CommentsUserComponent, canActivate:[AuthGuard] },
  { path: 'pasante-tickets', component: TicketsComponent, canActivate:[AuthGuard] },
  { path: 'teacher-reserves-send', component: ReservesSendComponent, canActivate:[AuthGuard] },
  { path: 'crear-nuevo-usuario', component: CreateUserComponent, canActivate:[AuthGuard] },
  { path: 'admin-history', component: HistoryComponent, canActivate:[AuthGuard] },
  { path: 'listar-nuevo-usuario', component: ListUserComponent, canActivate:[AuthGuard] },
  { path: 'laboratorios', component: ListLComponent, canActivate:[AuthGuard] },
  { path: 'laboratorios/lab-computadoras/:id', component: ListCComponent, canActivate:[AuthGuard] },
  { path: 'laboratorios/lab-computadoras', component: ListCComponent, canActivate:[AuthGuard] },
  { path: 'lab-computadoras', component: ListCComponent, canActivate:[AuthGuard] },
  { path: 'restablecer-contraseña', component: RecuperarComponent},
  { path: 'auth/nueva-contraseña', component: PasswrdComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
