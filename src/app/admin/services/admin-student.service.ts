import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminStudentService {

  constructor(private db: AngularFireDatabase) { }

  GetStudentsList(): Observable<any[]> {
    return this.db.list('students-list').valueChanges();
  }

  GetStudentsLeaves(): Observable<any[]> {
    return this.db.list('students-leave').valueChanges();
  }
  
  GetStudentsComplaints(): Observable<any[]> {
    return this.db.list('students-complaint').valueChanges();
  }
}
