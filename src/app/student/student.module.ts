import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StduentHomeComponent } from './components/stduent-home/stduent-home.component';
import { MyLeavesComponent } from './components/my-leaves/my-leaves.component';
import { ApplyLeavesComponent } from './components/apply-leaves/apply-leaves.component';
import { ApplyComplaintComponent } from './components/apply-complaint/apply-complaint.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';



@NgModule({
  declarations: [
    StduentHomeComponent,
    MyLeavesComponent,
    ApplyLeavesComponent,
    ApplyComplaintComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
