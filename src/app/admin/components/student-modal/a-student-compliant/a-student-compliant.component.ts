import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminStudentService } from 'src/app/admin/services/admin-student.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-a-student-compliant',
  templateUrl: './a-student-compliant.component.html',
  styleUrls: ['./a-student-compliant.component.css']
})
export class AStudentCompliantComponent {
  yourDataSource: MatTableDataSource<any>;
  yourDisplayedColumns: string[];
  complaintsActionButtons = [
    { icon: 'visibility', function: (complaint:any) => this.viewComplaint(complaint) },
  ];
  
  constructor(private studentservice: AdminStudentService, private datePipe: DatePipe) {
    this.yourDataSource = new MatTableDataSource<any>([]);
    this.yourDisplayedColumns = [];
    this.getStudentAction()
  }

  viewComplaint(complaint: any) {
    console.log("Complaint", complaint)
  }



  getStudentAction() {
    this.studentservice.GetStudentsComplaints().subscribe(data => {
      // this.StudentList = data;
      const showColumns = ['complaintId', 'complaint', 'severity', 'type', 'status']

      const ArrayData = data.map((item) => {
        let temp_complaint = `${item.complaint.slice(0, 150)}...`;
        let temp_type = this.capitalizeFirstLetter(item.type)
        return { ...item, complaint: temp_complaint, type: temp_type }

      })

      this.yourDataSource = new MatTableDataSource(ArrayData);
      this.yourDisplayedColumns = showColumns;

    });
  }

  formatDateWithDay(date: any): string {
    const formattedDate = this.datePipe.transform(date, 'dd-MMM-YYYY');
    const dayOfWeek = this.datePipe.transform(date, 'EEEE');

    return `${formattedDate} (${dayOfWeek})`;
  }

  capitalizeFirstLetter(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

}
