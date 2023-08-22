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
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    NavbarComponent,
    TableWithActionsComponent,
    AdminStudentFormsComponent,
    SidebarComponent
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
    MatButtonModule,
    MatSidenavModule,
    LayoutModule


  ],
  exports:[
    NavbarComponent,
    TableWithActionsComponent,
    AdminStudentFormsComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
