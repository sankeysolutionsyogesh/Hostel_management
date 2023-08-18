import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminStudentService } from 'src/app/admin/services/admin-student.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-a-student-leaves',
  templateUrl: './a-student-leaves.component.html',
  styleUrls: ['./a-student-leaves.component.css']
})
export class AStudentLeavesComponent {

  yourDataSource: MatTableDataSource<any>;
  yourDisplayedColumns: string[];
  leavesActionButtons = [
    { icon: 'visibility', function: (leaves:any) => this.viewLeaves(leaves) },
  ];
  
  constructor(private studentservice: AdminStudentService, private datePipe: DatePipe) {
    this.yourDataSource = new MatTableDataSource<any>([]);
    this.yourDisplayedColumns = [];
    this.getStudentAction()
  }

  viewLeaves(leaves: any) {
    console.log("Complaint", leaves)
  }

  getStudentAction() {
    this.studentservice.GetStudentsLeaves().subscribe(data => {
      // this.StudentList = data;
      const showColumns = ['student_name', 'room_number', 'startDate', 'endDate', 'status',]
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
        let start_date = this.formatDateWithDay(item.startDate)
        let end_date = this.formatDateWithDay(item.endDate)


        return { ...item, startDate: start_date, endDate: end_date }

      })

      console.log("asdasda", data)

      this.yourDataSource = new MatTableDataSource(ArrayData);
      this.yourDisplayedColumns = showColumns;

    });
  }

  formatDateWithDay(date: any): string {
    const formattedDate = this.datePipe.transform(date, 'dd-MMM-YYYY');
    const dayOfWeek = this.datePipe.transform(date, 'EEEE');

    return `${formattedDate} (${dayOfWeek})`;
  }

}
