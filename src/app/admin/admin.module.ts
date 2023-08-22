import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AdminStudentComponent } from './components/student-modal/admin-student/admin-student.component';
import { AdminWardenComponent } from './components/warden-modal/admin-warden/admin-warden.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { AStudentCompliantComponent } from './components/student-modal/a-student-compliant/a-student-compliant.component';
import { AStudentLeavesComponent } from './components/student-modal/a-student-leaves/a-student-leaves.component';
import { AStudentListComponent } from './components/student-modal/a-student-list/a-student-list.component';
import { DatePipe } from '@angular/common';
import { AddStudentsComponent } from './components/student-modal/add-students/add-students.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditStudentComponent } from './components/student-modal/edit-student/edit-student.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ViewSingleCompliantComponent } from './components/student-modal/view-single-compliant/view-single-compliant.component';
import { ViewSingleLeaveComponent } from './components/student-modal/view-single-leave/view-single-leave.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import the MatToolbarModule
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AdminComponent,
    AdminStudentComponent,
    AdminWardenComponent,
    AdminHomepageComponent,
    AStudentCompliantComponent,
    AStudentLeavesComponent,
    AStudentListComponent,
    AddStudentsComponent,
    EditStudentComponent,
    ViewSingleCompliantComponent,
    ViewSingleLeaveComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule,
    RouterModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule

  ],
  providers: [DatePipe],
})
export class AdminModule { }
