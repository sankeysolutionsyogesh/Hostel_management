import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { switchMap, catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentmoduleService {

  myInfo: any = {}
  constructor(private db: AngularFireDatabase) {
    this.myInfo = this.getLoginInfo()
  }


  getGoogleEmail(): any {
    return localStorage.getItem('GoogleInfo');
  }

  getLoginRole(): any {
    return localStorage.getItem('Role');
  }

  getLoginInfo(): any {
    const data: any = localStorage.getItem('LoginInfo')
    return JSON.parse(data);
  }


  setLoggedStudentdata(data: any) {
    localStorage.setItem('myInfo', JSON.stringify(data[0]));
  }

  getLoggedStudentdata() {
    const data: any = localStorage.getItem('myInfo')
    return JSON.parse(data);
  }
  // checkStudentExists(role: string) {
  //   const details = this.getLoginInfo()


  //   if (details?.token) {
  //     if (details.role === role) {
  //       this.getStudentByEmail(details.email).subscribe({
  //         next: (data: any) => {
  //           if (data.length > 0) {
  //             this.setLoggedStudentdata(data)
  //             console.log("Student exisit", data)
  //             return true
  //           } else {
  //             return false;
  //           }
  //         },
  //         error: (error: any) => {
  //           console.error("Error occurred:", error);
  //           return false;
  //         }
  //       }
  //       );
  //       return false
  //     } else {
  //       return false
  //     }
  //   } else {
  //     return false
  //   }

  // }
  // checkStudentExists(role: string): Observable<boolean> {
  //   return this.getLoginInfo().pipe(
  //     switchMap((details: any) => {
  //       if (details?.token && details.role === role) {
  //         return this.getStudentByEmail(details.email).pipe(
  //           switchMap((data: any) => {
  //             if (data.length > 0) {
  //               this.setLoggedStudentdata(data)
  //               console.log("Student exists", data);
  //               return of(true);
  //             } else {
  //               return of(false);
  //             }
  //           }),
  //           catchError((error: any) => {
  //             console.error("Error occurred:", error);
  //             return of(false);
  //           })
  //         );
  //       } else {
  //         return of(false);
  //       }
  //     }),
  //     catchError(() => of(false))
  //   );
  // }

  // getStudentByEmail(email: any): any {
  //   if (email != null) {
  //     const studentsRef = this.db.list('students-list', ref =>
  //       ref.orderByChild('student_email').equalTo(email)
  //     );

  //     return studentsRef.valueChanges();
  //   } else {
  //     return [];
  //   }
  // }




  // getStudentByEmail(email: string): Observable<any[]> {
  //   console.log("Email", email)
  //   const studentsRef = this.db.list('students-list', ref =>
  //     ref.orderByChild('student_email').equalTo(email)
  //   );

  //   return  studentsRef.valueChanges(); // This will return an Observable of the queried data
  // }

  checkStudentData(role: any): Observable<boolean> {
    console.log("Role ", role, this.myInfo)
    if (this.myInfo?.token) {
      if (role === this.myInfo?.role) {

        const studentsRef = this.db.list('students-list', ref =>
          ref.orderByChild('student_email').equalTo(this.myInfo.email)
        );



        return studentsRef.valueChanges().pipe(
          map((data: any[]) => {
            if (data.length > 0) {
              console.log("Student final info", data);

              this.setLoggedStudentdata(data)
              return true;
            } else {

              console.log("Student doesn't exisits", data);

              return false;
            }
          }),
          catchError((error) => {
            return throwError(() => error);
          })
        );

      } else {
        return throwError(() => "Error of role doesn't match");
      }
    } else {
      return throwError(() => "Error of token doesn't exisits");

    }
  }


  // getStudentData(): Observable<any> {
  //   return Observable.create((observer: any) => {
  //     const myInfo = this.studentinfo.getStudentData()
  //     observer.next(myInfo);
  //     observer.complete();
  //   });

  // }

}
