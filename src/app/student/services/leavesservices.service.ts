import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LeavesservicesService {
  lastLeaveId = 0
  constructor(private db: AngularFireDatabase,) {
    this.getlastdata()
  }

  getLeavesByEmail(email: string): Observable<any[]> {
    const studentsRef = this.db.list('students-leave', ref =>
      ref.orderByChild('student_email').equalTo(email)
    );

    return studentsRef.valueChanges(); // This will return an Observable of the queried data
  }

  applyforleave(data: any) {
    data.status = "pending";
    data.leaveId = this.lastLeaveId + 1
    console.log("Final leaves data ", data)
    const leave = this.db.list('students-leave');
    return new Promise<void>((resolve, reject) => {
      leave.push(data)
        .then(() => {
          // Alert when student is added
          window.alert('Leave applied succesfully!');
          resolve();
        })
        .catch(error => {
          console.log('Error while applying leave:', error);
          reject(error);
        });
    });
  }


  getlastdata() {
    const studentsRef = this.db.list('students-leave', ref =>
      ref.orderByChild('applied_at').limitToLast(1)
    );

    studentsRef.snapshotChanges().subscribe(data => {
      if (data.length > 0) {
        const lastAddedStudent: any = data[0].payload.val();
        console.log("Leavd id ", lastAddedStudent)
        this.lastLeaveId = lastAddedStudent.leaveId

        // console.log('Last added student:', lastAddedStudent);
      } else {
        this.lastLeaveId = 0

      }
    });

  }
}
