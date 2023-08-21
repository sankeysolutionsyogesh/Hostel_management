import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PagenotfoundComponent } from './auth/components/pagenotfound/pagenotfound.component';
import { UnauthorisedComponent } from './auth/components/unauthorised/unauthorised.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'unathorised',
    component: UnauthorisedComponent
  },
  // { path: 'student', redirectTo: 'auth', pathMatch: 'full' },
  // { path: "**", pathMatch: 'prefix', component: PagenotfoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
