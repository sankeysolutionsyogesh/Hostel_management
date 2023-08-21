import { Component, Input ,  EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminStudentService } from 'src/app/admin/services/admin-student.service';


@Component({
  selector: 'app-admin-student-forms',
  templateUrl: './admin-student-forms.component.html',
  styleUrls: ['./admin-student-forms.component.css']
})
export class AdminStudentFormsComponent {

  @Input() StudentDetails: any = {}
  @Input() PageName: string = "";
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

  formData = {
    feesPaid: 0.0,
    isPaid: false,
    selectedDate: ""
  };
  constructor(private studentservice: AdminStudentService) {
    console.log("Data in modal ", this.StudentDetails)


  }

  ngInit() {
    console.log("Data in modal ", this.StudentDetails)
  }

  onSubmit(form: NgForm) {
    if (form.valid) {

      const data = {
        sid: this.StudentDetails.sid,
        student_name: form.value.studentName,
        student_email: form.value.studentEmail,
        gender: form.value.gender,
        room_number: parseInt(form.value.roomNumber),
        fees_paid: parseInt(form.value.feesPaid),
        created_at: this.StudentDetails.created_at ? this.StudentDetails.created_at : new Date().toISOString(),
      };

      if (this.PageName === 'editpage') {

        try {
          this.studentservice.editStudent(data)
            .then(result => {
              console.log('Edit success:', result);
              // Do something with the success result
              this.notifyParent.emit(result);
            })
            .catch(error => {
              alert(`Edit error:, ${error}`);
              // Handle the error
            });

        }
        catch (err) {
          console.log("error in post API", err)

        }

      } else {


        console.log("formdata", data)


        try {
          this.studentservice.registerStudent(data)
            .then((result) => {
              console.log('Student registered successfully!');
              form.resetForm();
              this.notifyParent.emit('Student registered successfully!');
            })
            .catch((error) => {
              console.error('Error registering student:', error);
            });
        }
        catch (err) {
          console.log("error in post API", err)

        }
      }
    }
  }

  onDestroy() {
    this.StudentDetails = {}
    this.PageName = "";
    console.log("Form destroy")
  }

  limitFeePaid(event: any) {
    this.formData.feesPaid = parseFloat(event.target.value);
    this.formData.isPaid = this.formData.feesPaid > 0;
  }

  limitRoomNumbert(event: any) {
    const maxLength = 6;
    if (event.target.value.length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
    }
  }


  resetForm(form: NgForm) {
    form.resetForm(); // Reset the form
    // this.apiErrorMessage = 'API Error:'
    // console.log(this.apiErrorMessage)
    // You can also reset other properties if needed
  }


}
