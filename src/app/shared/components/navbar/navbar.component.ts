import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicesService } from 'src/app/auth/servies/login-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  @Input() pagesRoutes: any = [];
  @Input() titlename: string | undefined = "";
  @Input() role: string = "";


  constructor(
    private loginService: LoginServicesService, private router: Router
  ) {
    // console.log("Pages", this.pagesRoutes)
    // console.log("Pages", this.role)
  }


  logout() {
    this.loginService.logout()
  }
}
