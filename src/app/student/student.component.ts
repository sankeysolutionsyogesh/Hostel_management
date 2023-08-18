import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
    console.log("In student")
    this.route.paramMap.subscribe(params => {
      const id = params.get('email');
      if (id !== null) {
        console.log("id - ", id)
        // this.id = parseInt(id);
        // this.leaveservices.getSingleLeaves(this.id).subscribe((data): any => {
        //   console.log("Leaves", data[0])
        //   this.leaveInfo = data[0]
        //   this.loading = false
        // });
      }
      // this.id = parseInt(id)
      // Now you can use the 'id' in your component
    });
  }
}
