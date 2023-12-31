import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UnauthorisedComponent } from './components/unauthorised/unauthorised.component';
import {PagenotfoundComponent} from "./components/pagenotfound/pagenotfound.component";

const routes: Routes = [
  {
    path: 'auth', component: AuthComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      // { path: 'unathorised', component: UnauthorisedComponent },

    ]
  },
];



@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AuthRoutingModule { }
