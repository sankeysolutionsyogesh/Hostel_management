import { Component, Inject } from '@angular/core';
import { AStudentListComponent } from '../a-student-list/a-student-list.component';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {

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
