import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { studentGuardsGuard } from './guards/student-guards.guard';
import { StduentHomeComponent } from './components/stduent-home/stduent-home.component';
import { MyLeavesComponent } from './components/my-leaves/my-leaves.component';
import { ApplyLeavesComponent } from './components/apply-leaves/apply-leaves.component';
import { ApplyComplaintComponent } from './components/apply-complaint/apply-complaint.component';

const routes: Routes = [
  {
    path: 'student', canActivate: [studentGuardsGuard], component: StudentComponent, children: [
      { path: '', redirectTo: 'student-home', pathMatch: 'full' },
      { path: 'student-home', component: StduentHomeComponent },
      { path: 'student-leaves', component: MyLeavesComponent },
      { path: 'student-apply-complaint', component: ApplyComplaintComponent },
      { path: 'student-apply-leaves', component: ApplyLeavesComponent },
    ]
  }
];




@NgModule({
  declarations: [],

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class StudentRoutingModule { }
