import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { StudentmoduleService } from '../../services/studentmodule.service';
import { LeavesservicesService } from '../../services/leavesservices.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-my-leaves',
  templateUrl: './my-leaves.component.html',
  styleUrls: ['./my-leaves.component.css']
})
export class MyLeavesComponent {

  yourDataSource: MatTableDataSource<any>;
  yourDisplayedColumns: string[];
  leavesActionButtons = [
    { icon: 'visibility', function: (leaves: any) => this.viewLeaves(leaves) },
  ];

  
  viewLeaves(leaves: any) {
    console.log("Complaint", leaves)
  }


  myLeaves: any = []
  loading: boolean = true
  displayedColumns: string[] = ['sdate', 'edate', 'status'];

  constructor(private datePipe: DatePipe, private studentservices: StudentmoduleService, private leaveservices: LeavesservicesService) {
    this.yourDataSource = new MatTableDataSource<any>([]);
    this.yourDisplayedColumns = [];
    this.checkStudentData()
  }

  createLeavesTable(data: any) {
    const showColumns = ['startDate', 'endDate', 'status']

    const ArrayData = data.map((item:any) => {
      let start_date = this.formatDateWithDay(item.startDate)
      let end_date = this.formatDateWithDay(item.endDate)


      return { ...item, startDate: start_date, endDate: end_date }

    })

    console.log("asdasda", data)

    this.yourDataSource = new MatTableDataSource(ArrayData);
    this.yourDisplayedColumns = showColumns;
  }

  checkStudentData(): void {
    this.getStudentData()
      .pipe(
        switchMap(myInfo => this.leaveservices.getLeavesByEmail(myInfo?.student_email))
      )
      .subscribe({
        next: (data: any) => {
          if (data.length > 0) {
            console.log("Leaves", data)
            this.myLeaves = data
            this.createLeavesTable(data)
            this.loading = false;
            return true
          } else {
            this.myLeaves = []
            // this.router.navigate(['unathorised']);
            return false;
          }
        },
        error: error => {
          console.error("Error occurred:", error);
        }
      }
      );
  }
  getStudentData(): Observable<any> {
    return Observable.create((observer: any) => {
      const myInfo = this.studentservices.getLoggedStudentdata()
      observer.next(myInfo);
      observer.complete();
    });

  }

  formatDateWithDay(date: any): string {
    const formattedDate = this.datePipe.transform(date, 'dd-MMM-YYYY');
    const dayOfWeek = this.datePipe.transform(date, 'EEEE');

    return `${formattedDate} (${dayOfWeek})`;
  }
}
