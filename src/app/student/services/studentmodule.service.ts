import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentmoduleService {

  constructor() { }


  getGoogleEmail(): any {
    return localStorage.getItem('GoogleInfo');
  }

  getLoginRole(): any {
    return localStorage.getItem('Role');
  }


  checkStudentExists(role: string) {
    const email = this.getGoogleEmail()
    const loginRole = this.getLoginRole()

    if (email) {
      if (loginRole === role) {
        console.log("Student as successfully logged")
        return true
      } else {
        return false
      }
    } else {
      return false
    }


    // console.log("Student data - ", profile.email)

    // this.studentService.getStudentByEmail(profile.email).subscribe({
    //   next: (data: any) => {
    //     if (data.length > 0) {
    //       console.log("Student exisit", data)

    //       this.setloggedDetails(data)
    //       this.router.navigate(['student']);

    //       return true
    //     } else {

    //       this.router.navigate(['unathorised']);
    //       return false;
    //     }
    //   },
    //   error: (error: any) => {
    //     console.error("Error occurred:", error);
    //   }
    // }
    // );



  }

}
