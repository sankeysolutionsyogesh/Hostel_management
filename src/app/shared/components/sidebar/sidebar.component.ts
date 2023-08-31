import { Component, Input,  ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicesService } from 'src/app/auth/servies/login-services.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() pagesRoutes: any = [];
  @Input() titlename: string | undefined = "";
  @Input() role: string = "";
  // @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
    private loginService: LoginServicesService, private router: Router
  ) {
    // console.log("Pages", this.pagesRoutes)
    // console.log("Pages", this.role)
  }
  toggleSidebar() {
    // this.sidenav.toggle();
  }


  logout() {
    this.loginService.logout()
  }

}
