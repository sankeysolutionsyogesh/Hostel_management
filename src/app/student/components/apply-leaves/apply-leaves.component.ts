import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { StudentmoduleService } from '../../services/studentmodule.service';
import { LeavesservicesService } from '../../services/leavesservices.service';

@Component({
  selector: 'app-apply-leaves',
  templateUrl: './apply-leaves.component.html',
  styleUrls: ['./apply-leaves.component.css']
})
export class ApplyLeavesComponent {
  leaveForm: FormGroup;
  range: FormGroup; // FormGroup for the date range
  loading = false;
  myInfo: any = {}
  minimumValidDate: Date;
  disabled: boolean = true;
  constructor(private studentservices: StudentmoduleService, private fb: FormBuilder, private applyleaveservice: LeavesservicesService) {

    this.myInfo  = this.studentservices.getLoggedStudentdata()
    console.log("My info - ", this.myInfo)
    const createdDate = new Date(this.myInfo.created_at);
    this.minimumValidDate = createdDate;

    this.range = this.fb.group({
      start: [''],
      end: [''],
    });

    this.leaveForm = this.fb.group({

      reason: ['', Validators.required],
      relativeName: ['', [Validators.required, Validators.pattern(/^[\p{L} ]+$/u)]],
      relativeContact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],

    });
  }


  submitForm() {
    if (this.leaveForm.valid) {
      if (this.range.valid) {

        const mstartDate = moment(this.range.value.start);
        const mendDate = moment(this.range.value.end);

        const startDate = mstartDate.format('MM/DD/YYYY');
        const endDate = mendDate.format('MM/DD/YYYY');


        // Process the form data
        this.loading = true;
        const data = {
          startDate,
          endDate,
          ...this.leaveForm.value,
          applied_at: new Date().toISOString(),
          student_email: this.myInfo.student_email,
          student_name: this.myInfo.student_name,
          room_number: this.myInfo.room_number,

        }
        // console.log(data);

        try {
          this.applyleaveservice.applyforleave(data)
            .then(() => {
              console.log('Student registered successfully!');
              this.loading = false;
              this.leaveForm.reset();
              this.range.reset();
              this.resetform()
            })
            .catch((error: any) => {
              console.log('Error registering student:', error);
            });
        }
        catch (err) {
          console.log("error in post API", err)

        }
      }
      else {
        alert("Select dates properly")
      }
      // You can perform additional actions like submitting the form to a backend server
    }
    else {
      alert("Fill all the fields.")
    }
  }

  resetform() {
    this.leaveForm.setValue({
      // Set your initial values for each form control
      relativeName: '',
      relativeContact: '',
      // ... Other form controls ...
    });

    this.range.setValue({
      start: null,
      end: null
    });

  }

}
