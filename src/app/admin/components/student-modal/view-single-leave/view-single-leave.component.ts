import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { StudentServiceService } from '../../admimn-services/student-service.service';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common'
import { AdminStudentService } from 'src/app/admin/services/admin-student.service';
@Component({
  selector: 'app-view-single-leave',
  templateUrl: './view-single-leave.component.html',
  styleUrls: ['./view-single-leave.component.css']
})
export class ViewSingleLeaveComponent {
  id: any = null;
  leaveInfo: any = {}
  loading: boolean = true

  constructor(private location: Location,private router: Router,private datePipe: DatePipe, private route: ActivatedRoute, private leaveservices: AdminStudentService) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.id = parseInt(id);
        this.leaveservices.getSingleLeaves(this.id).subscribe((data): any => {
          console.log("Leaves", data[0])
          this.leaveInfo = data[0]
          this.loading = false
        });
      }
      // this.id = parseInt(id)
      console.log("ID", this.id)
      // Now you can use the 'id' in your component
    });
  }

  ngOnInit(): void {

  }

  Approval(event: any) {
    console.log(event);
    

  }

  formatDateWithDay(date: any): string {
    const formattedDate = this.datePipe.transform(date, 'dd-MMM-YYYY');
    const dayOfWeek = this.datePipe.transform(date, 'EEEE'); // EEEE gives full day name

    return `${formattedDate} (${dayOfWeek})`;
  }

  onStatusChange(){
    console.log(this.leaveInfo.status)
    this.leaveservices.updateStudentStatus(this.leaveInfo)

  }

  goBack(){
    this.location.back();
  }

}
