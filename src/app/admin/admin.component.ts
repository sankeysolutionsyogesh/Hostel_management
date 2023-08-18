import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  pagesRoutes = [
    { label: 'Home', link: './admin-home' },
    { label: 'Warden', link: './admin-warden' },
    { label: 'Student', link: './admin-student' },
  ];
  loading: boolean = true;
  role: string = "Auth"
  myInfo: any = {}


  constructor() {
    this.loading = false;
  }
}
