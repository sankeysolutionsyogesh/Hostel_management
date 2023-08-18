import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { studentGuardsGuard } from './guards/student-guards.guard';

const routes: Routes = [
  {
    path: 'student', canActivate: [studentGuardsGuard], component: StudentComponent,
  }
];




@NgModule({
  declarations: [],

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class StudentRoutingModule { }
