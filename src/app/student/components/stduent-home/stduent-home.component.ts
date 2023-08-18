import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stduent-home',
  templateUrl: './stduent-home.component.html',
  styleUrls: ['./stduent-home.component.css']
})
export class StduentHomeComponent {

  constructor(private router: Router, private route: ActivatedRoute){
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
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
