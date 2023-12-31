import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminStudentService {

  lastSid: number = 0;

  constructor(private db: AngularFireDatabase) {
    this.getlastdata()
  }

  getlastdata() {
    const studentsRef = this.db.list('students-list', ref =>
      ref.orderByChild('created_at').limitToLast(1)
    );

    studentsRef.snapshotChanges().subscribe(data => {
      if (data.length > 0) {
        const lastAddedStudent: any = data[0].payload.val();
        this.lastSid = lastAddedStudent.sid
        console.log("Registered student", lastAddedStudent)


        // console.log('Last added student:', lastAddedStudent);
      }
    });

  }


  GetStudentsList(): Observable<any[]> {
    return this.db.list('students-list').valueChanges();
  }

  GetStudentsLeaves(): Observable<any[]> {
    return this.db.list('students-leave').valueChanges();
  }

  GetStudentsComplaints(): Observable<any[]> {
    return this.db.list('students-complaint').valueChanges();
  }

  editStudent(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const studentsRef = this.db.list('students-list', ref =>
        ref.orderByChild('sid').equalTo(data.sid)
      );

      studentsRef.snapshotChanges().subscribe((snapshots) => {
        snapshots.forEach((snapshot) => {
          const key: any = snapshot.key;
          studentsRef.update(key, data)
            .then(() => {
              resolve({ message: "Successfully updated" });
            })
            .catch((error) => {
              reject({ message: `Error while updating status - ${error}` });
            });
        });
      });
    });
  }


  registerStudent(data: any): Promise<void> {

    data.sid = this.lastSid + 1;
    console.log("student data", data)
    const studentsRef = this.db.list('students-list');
    return new Promise<void>((resolve, reject) => {
      studentsRef.push(data)
        .then(() => {
          // Alert when student is added
          // window.alert('Student added successfully!');
          resolve();
        })
        .catch(error => {
          console.error('Error adding student:', error);
          reject(error);
        });
    });
  }

  deleteStudent(id: any) {

    const studentsRef = this.db.list('students-list', ref =>
      ref.orderByChild('sid').equalTo(id)
    );

    studentsRef.snapshotChanges().subscribe((snapshots) => {
      snapshots.forEach((snapshot) => {
        const key: any = snapshot.key;

        studentsRef.remove(key)
          .then(() => {
            return { message: "Sucessfully deleted" }
          })
          .catch((error) => {
            return { message: `Error will deleting - ${error}` }
          });
      });
    });

  }


  getSingleLeaves(id: any) {
    const studentsRef = this.db.list('students-leave', ref =>
      ref.orderByChild('leaveId').equalTo(id)
    );

    return studentsRef.valueChanges();

  }

  updateStudentStatus(data:any) {
    console.log("Upodating", data.leaveId, data.status)
    const studentsRef = this.db.list('students-leave', ref =>
      ref.orderByChild('leaveId').equalTo(data.leaveId)
    );

    studentsRef.snapshotChanges().subscribe((snapshots) => {
      snapshots.forEach((snapshot) => {
        const key: any = snapshot.key;

        const updatedData = { status: data.status };

        studentsRef.update(key, updatedData)
          .then(() => {
            return { message: "Successfully updated status" };
          })
          .catch((error) => {
            return { message: `Error while updating status - ${error}` };
          });
      });
    });

  }

}
