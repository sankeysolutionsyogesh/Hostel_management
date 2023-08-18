import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  pagesRoutes = [
    { label: 'Login', link: './login' },
    // { label: 'Register', link: './apply-leave' },
    // { label: 'View Leaves', link: './view-leave' },
  ];
  loading: boolean = true;
  role: string = "Auth"
  myInfo: any = {}


  constructor() {
    this.loading = false;
  }
}
