import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


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
    { label: 'Announcements', link: './admin-add-announcements' },


  ];
  loading: boolean = true;
  role: string = "Auth"
  myInfo: any = {}

  isDesktop: boolean = true;
  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.loading = false;
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport width is 500px or greater!');
          this.isDesktop = true
          this.isMobile = false
        } else {
          console.log('Viewport width is less than 500px!');
          this.isMobile = true
          this.isDesktop = false

        }
      });
  }
}
