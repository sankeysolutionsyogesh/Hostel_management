import { Component, Inject } from '@angular/core';
import { AStudentListComponent } from '../a-student-list/a-student-list.component';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {

  StudentDetails = {}
  constructor(
    public dialogRef: MatDialogRef<AStudentListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.StudentDetails = data
    console.log("Data", data)
  }

  onNoClick(Outputdata:any): void {
    console.log("Return data", Outputdata)
    this.dialogRef.close();
  }

}
