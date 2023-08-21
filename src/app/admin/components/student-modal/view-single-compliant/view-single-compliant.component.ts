import { Component , Inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AStudentCompliantComponent } from '../a-student-compliant/a-student-compliant.component';


@Component({
  selector: 'app-view-single-compliant',
  templateUrl: './view-single-compliant.component.html',
  styleUrls: ['./view-single-compliant.component.css']
})
export class ViewSingleCompliantComponent {

  constructor(
    public dialogRef: MatDialogRef<AStudentCompliantComponent>,
    @Inject(MAT_DIALOG_DATA) public Complaint: any,
  ) {
    console.log("StudentData", Complaint)
  }

  pageName = 'Edit'
  onNoClick(): void {
    this.dialogRef.close();
  }

}
