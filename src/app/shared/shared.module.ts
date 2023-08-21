import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import the MatToolbarModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { RouterModule } from '@angular/router';
import { TableWithActionsComponent } from './components/table-with-actions/table-with-actions.component';
import { MatTableModule } from '@angular/material/table';
import { AdminStudentFormsComponent } from './components/admin-student-forms/admin-student-forms.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    NavbarComponent,
    TableWithActionsComponent,
    AdminStudentFormsComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule, 
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[
    NavbarComponent,
    TableWithActionsComponent,
    AdminStudentFormsComponent
  ]
})
export class SharedModule { }
