import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminmoduleservicesService {

  constructor() { }

  getLoginInfo(): any {
    const data:any = localStorage.getItem('LoginInfo')
    return JSON.parse(data);
  }


  checkAdminExists(role: string) :any{
    const LoginDetails = this.getLoginInfo()
    
    if (LoginDetails?.token) {
      if (LoginDetails?.role === role) {
        console.log("Admin as successfully logged")
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
}
