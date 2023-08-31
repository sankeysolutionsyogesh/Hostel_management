import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentmoduleService } from './services/studentmodule.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  pagesRoutes = [
    { label: 'Home', link: './student-home' },
    { label: 'My Leaves', link: './student-leaves' },
    { label: 'Apply Leaves', link: './student-apply-leaves' },
    { label: 'Apply Complaint', link: './student-apply-complaint' },
  ];

  loading: boolean = true;
  role: string = "Auth"
  myInfo: any = {}

  isDesktop: boolean = true;
  isMobile: boolean = false;


  constructor(private breakpointObserver: BreakpointObserver,private studentservices: StudentmoduleService, private router: Router, private route: ActivatedRoute) {

    // const data = this.studentservices.getLoggedStudentdata()
    // console.log("My data", data)
    // this.myInfo = data[0]
    // this.loading = false;


  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isDesktop = true
          this.isMobile = false
        } else {
          this.isMobile = true
          this.isDesktop = false

        }
      });
  }

  ngDoCheck() {
    const data = this.studentservices.getLoggedStudentdata()
    console.log("My data", data)
    this.myInfo = data
    this.loading = false;
  }
}
