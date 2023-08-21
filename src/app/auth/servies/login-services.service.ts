import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';

interface User {
  token: string;
  email: string;
  role: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {


  constructor(private afs: AngularFireAuth, private route: ActivatedRoute, private router: Router) {

  }

  setLoginInfo(token: string, email: string, role: string): void {
    const data: User = {
      token: token,
      email: email,
      role: role
    }
    localStorage.setItem('LoginInfo', JSON.stringify(data));
  }

  getLoginInfo(): any {
    const data:any = localStorage.getItem('LoginInfo')
    return JSON.parse(data);
  }

  LoginWithEmailPassword(token: string, email: string, role: string) {
    this.setLoginInfo(token, email, role)
    this.router.navigate(['admin']);

  }

  LoginWithGooglePopup() {
    this.afs.signInWithPopup(new GoogleAuthProvider())
      .then((res: any) => {
        console.log("Sucecs", res)
        const idToken = res?.credential.idToken;
        if (idToken) {
          // this.setToken(idToken, 'Student')
          console.log(res.additionalUserInfo)

          const additionalUserInfo = res.additionalUserInfo;

          if (additionalUserInfo && additionalUserInfo.providerId === 'google.com') {

            const profile = additionalUserInfo.profile;
            const isNewUser = additionalUserInfo.isNewUser;

            this.setLoginInfo(idToken, profile.email, 'student')
            this.router.navigate(['student']);


          }
          return true
        } else {
          return false
        }
      })
      .catch((eror) => {
        console.log("Error", eror)
        return false;
      })
  }


  logout() {
    console.log("Logout Called")
    localStorage.clear();
    // localStorage.removeItem('token');
    // localStorage.removeItem('LoginInfo');
    // localStorage.removeItem('role');
    this.router.navigate(['./auth/login']);
  }

  
}
