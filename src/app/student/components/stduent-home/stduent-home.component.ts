import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stduent-home',
  templateUrl: './stduent-home.component.html',
  styleUrls: ['./stduent-home.component.css']
})
export class StduentHomeComponent {

  constructor(private router: Router, private route: ActivatedRoute){
  }
}
