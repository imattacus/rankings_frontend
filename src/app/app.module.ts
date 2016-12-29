import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { MomentModule } from 'angular2-moment';
import { provideAuth, AuthHttp } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { RankTableComponent } from './rank-table.component';
import { RankEntryComponent } from './rank-entry.component';
import { ServerDetailComponent } from './server-detail.component';
import { ServerFormComponent } from './server-form.component';
import { CreateServerComponent } from './create-server.component';

import { UserLoginComponent } from './user-login.component';
import { UserRegisterComponent } from './user-register.component';
import { UserServersComponent } from './user-servers.component';

import { AppRoutingModule } from './app-routing.module';

import { ServerService } from './server.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RankTableComponent,
    RankEntryComponent,
    ServerDetailComponent,
    CreateServerComponent,
    ServerFormComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    AppRoutingModule,
    MomentModule
  ],
  providers: [  ServerService,
                provideAuth({
                  headerPrefix: 'JWT'
                }),
                AuthService,
                AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
