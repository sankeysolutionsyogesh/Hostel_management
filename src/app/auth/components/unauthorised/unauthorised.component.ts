import { Component } from '@angular/core';
import { LoginServicesService } from '../../servies/login-services.service';

@Component({
  selector: 'app-unauthorised',
  templateUrl: './unauthorised.component.html',
  styleUrls: ['./unauthorised.component.css']
})
export class UnauthorisedComponent {

  constructor(private loginService: LoginServicesService) {
  }

  logoutbutton() {
    this.loginService.logout()
  }

}
