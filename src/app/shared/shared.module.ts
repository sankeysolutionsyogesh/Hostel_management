import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import the MatToolbarModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { RouterModule } from '@angular/router';
import { TableWithActionsComponent } from './components/table-with-actions/table-with-actions.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    NavbarComponent,
    TableWithActionsComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule, 
    RouterModule,
    MatTableModule
  ],
  exports:[
    NavbarComponent,
    TableWithActionsComponent
  ]
})
export class SharedModule { }
