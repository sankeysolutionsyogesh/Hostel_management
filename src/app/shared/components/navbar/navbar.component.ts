import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() pagesRoutes: any = [];
  @Input() titlename: string | undefined = "";
  @Input() role: string = "";


  constructor(
    // private loginService : LoginDataService, private router: Router
  ) {
    console.log("Pages", this.pagesRoutes)
    console.log("Pages", this.role)


   }

   ngOnInit() {
    console.log('Input Value:', this.pagesRoutes);
    console.log('Input Value:', this.role);

  }

  logout() {
    // this.loginService.logout()
  }
}
