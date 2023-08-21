import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StduentHomeComponent } from './components/stduent-home/stduent-home.component';
import { MyLeavesComponent } from './components/my-leaves/my-leaves.component';
import { ApplyLeavesComponent } from './components/apply-leaves/apply-leaves.component';
import { ApplyComplaintComponent } from './components/apply-complaint/apply-complaint.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

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
    StudentRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCardModule,
    BrowserModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ]
})
export class StudentModule { }
