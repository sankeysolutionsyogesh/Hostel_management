import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class AnnoucementService {


  lastSid: number = 0;

  constructor(private db: AngularFireDatabase) {
    this.getlastdata()
  }

  getlastdata() {
    const announcementRef = this.db.list('announcement-list', ref =>
      ref.orderByChild('id').limitToLast(1)
    );

    announcementRef.snapshotChanges().subscribe(data => {
      console.log("MY datalist announcementRef", data)
      if (data.length > 0) {
        const lastAddedStudent: any = data[0].payload.val();
        this.lastSid = lastAddedStudent[lastAddedStudent.length - 1].id
        console.log("Registered student",    lastAddedStudent[lastAddedStudent.length - 1].id)

        // console.log('Last added student:', lastAddedStudent);
      }
    });

  }


  // addannouncement(data: any): Promise<void> {
  //   console.log("student data", data)
  //   const announcementRef = this.db.list('announcement-list');
  //   return new Promise<void>((resolve, reject) => {
  //     announcementRef.push(data)
  //       .then(() => {
  //         // Alert when student is added
  //         // window.alert('Student added successfully!');
  //         resolve();
  //       })
  //       .catch(error => {
  //         console.error('Error adding student:', error);
  //         reject(error);
  //       });
  //   });
  // }


  addAnnouncement(data: any): Promise<void> {
    console.log("announcement data", data);

    this.db.collection('testCollection').add({
      field: this.form.value.newValue
    })
      .then(res => {
        console.log(res);
        this.form.reset();
      })
      .catch(e => {
        console.log(e);
      })

  }



}
