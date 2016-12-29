/**
 * Created by mattcallaway on 10/11/2016.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RankTableComponent } from './rank-table.component';
import { ServerDetailComponent } from './server-detail.component';
import { CreateServerComponent } from './create-server.component';
import { UserLoginComponent } from './user-login.component';
import { UserRegisterComponent } from './user-register.component';
import { UserServersComponent } from './user-servers.component';

import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/ranks', pathMatch: 'full' },
  { path: 'ranks',  component: RankTableComponent },
  { path: 'detail/:id', component: ServerDetailComponent },
  { path: 'create', component: CreateServerComponent, canActivate: [AuthGuard] },
  { path: 'login', component: UserLoginComponent},
  { path: 'register', component: UserRegisterComponent},
  { path: 'myservers', component: UserServersComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
