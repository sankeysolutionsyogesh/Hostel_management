import { Component } from '@angular/core';
import { LoginServicesService } from '../../servies/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginError: boolean = false;
  loading: boolean = false;
  // constructor(private snackBar: MatSnackBar, private loginService: LoginDataService, private router: Router) { }
  constructor(private loginservices : LoginServicesService){

  }
  username: string = '';
  password: string = '';

  LoginGoogle() {
    this.loading = true;
    this.loginservices.LoginWithGooglePopup()

  }

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin') {
      // Successful login action, navigate or perform actions here
      const token = "sdihsdfjslkdfjsdo329645873465783465873465fsdifsdiofsi"

      this.loginservices.LoginWithEmailPassword(token, this.username, 'admin')
      // this.loginService.setToken(token, 'Admin')
      // this.router.navigate(['admin'])

    } else {
      // Display error message
      // this.snackBar.open('Invalid username or password', 'Close', {
      //   duration: 3000 // Show the error message for 3 seconds
      // });
    }
  }
}
