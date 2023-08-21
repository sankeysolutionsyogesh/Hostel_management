import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentmoduleService } from './services/studentmodule.service';

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


  constructor(private studentservices: StudentmoduleService, private router: Router, private route: ActivatedRoute) {

    // const data = this.studentservices.getLoggedStudentdata()
    // console.log("My data", data)
    // this.myInfo = data[0]
    // this.loading = false;


  }

  ngDoCheck() {
    const data = this.studentservices.getLoggedStudentdata()
    console.log("My data", data)
    this.myInfo = data
    this.loading = false;
  }
}
