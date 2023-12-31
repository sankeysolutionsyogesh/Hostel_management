import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UnauthorisedComponent } from './components/unauthorised/unauthorised.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    PagenotfoundComponent,
    UnauthorisedComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AuthModule { }
