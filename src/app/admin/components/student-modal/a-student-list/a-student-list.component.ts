import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminStudentService } from 'src/app/admin/services/admin-student.service';
import { AddStudentsComponent } from '../add-students/add-students.component';
import { MatDialog } from '@angular/material/dialog';
import { EditStudentComponent } from '../edit-student/edit-student.component';
@Component({
  selector: 'app-a-student-list',
  templateUrl: './a-student-list.component.html',
  styleUrls: ['./a-student-list.component.css']
})
export class AStudentListComponent {
  yourDataSource: MatTableDataSource<any>;
  yourDisplayedColumns: string[];
  studentlistActionButtons = [
    { icon: 'edit', function: (student: any) => this.viewStudent(student) },
    { icon: 'delete', function: (student: any) => this.deleteStudent(student) },
  ];
  constructor(private studentservice: AdminStudentService, public dialog: MatDialog) {
    this.yourDataSource = new MatTableDataSource<any>([]);
    this.yourDisplayedColumns = [];
    this.getStudentAction()
  }

  viewStudent(student: any) {
    console.log("Complaint", student)
    this.openEditDialog(student)
  }

  deleteStudent(student: any) {
    const result = this.studentservice.deleteStudent(student.sid)
    console.log("Result of delete ", result)
    this.getStudentAction()
   
  }

  addStudent() {
    this.openAddDialog([])
  }

  openAddDialog(InputData: any): void {
    const dialogRef = this.dialog.open(AddStudentsComponent, {
      height: 'auto',
      width: '900px',
      data: InputData,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openEditDialog(InputData: any): void {
    const dialogRef = this.dialog.open(EditStudentComponent, {
      height: 'auto',
      width: '900px',
      data: InputData,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }


  getStudentAction() {
    this.studentservice.GetStudentsList().subscribe(data => {
      // this.StudentList = data;
      const showColumns = ['sid', 'student_name', 'gender', 'fees_paid', 'room_number',]
      // console.log("data", data)
      // const keysArray = data.reduce((keys: string[], obj) => {
      //   Object.keys(obj).forEach((key) => {
      //     if (!keys.includes(key)) {
      //       keys.push(key);
      //     }
      //   });
      //   return keys;
      // }, []);

      // console.log(keysArray);

      const ArrayData = data.map((item) => {
        let tempfeepaid = `${item.fees_paid}.00`
        let tempgender = "";
        if (item.gender == 'F') {
          tempgender = 'Female'
        } else if (item.gender == 'M') {
          tempgender = 'Male'
        } else {
          tempgender = 'Other'
        }

        return { ...item, gender: tempgender, fees_paid: tempfeepaid }

      })

      console.log("asdasda", ArrayData)

      this.yourDataSource = new MatTableDataSource(ArrayData);
      this.yourDisplayedColumns = showColumns;

    });
  }
}
