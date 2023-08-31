import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { adminGuardsGuard } from './guards/admin-guards.guard';
import { AdminWardenComponent } from './components/warden-modal/admin-warden/admin-warden.component';
import { AdminStudentComponent } from './components/student-modal/admin-student/admin-student.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { AStudentLeavesComponent } from './components/student-modal/a-student-leaves/a-student-leaves.component';
import { AStudentCompliantComponent } from './components/student-modal/a-student-compliant/a-student-compliant.component';
import { AStudentListComponent } from './components/student-modal/a-student-list/a-student-list.component';
import { ViewSingleLeaveComponent } from './components/student-modal/view-single-leave/view-single-leave.component';
import {PagenotfoundComponent} from "../auth/components/pagenotfound/pagenotfound.component";
import {AddAnnouncementComponent} from "./components/announcements/add-announcement/add-announcement.component";
import {AnnouncementsComponent} from "./components/announcements/announcements.component";

const routes: Routes = [
  {
    path: 'admin', canActivate: [adminGuardsGuard], component: AdminComponent, children: [
      { path: '', redirectTo: 'admin-home', pathMatch: 'full' },
      { path: 'admin-home', component: AdminHomepageComponent },
      { path: 'admin-warden', component: AdminWardenComponent },
      { path: 'admin-add-announcements', component: AnnouncementsComponent },
      {
        path: 'admin-student', component: AdminStudentComponent, children: [
          { path: '', redirectTo: 'a-student-list', pathMatch: 'full' },
          { path: 'a-student-leaves', component: AStudentLeavesComponent },
          { path: 'a-student-complaint', component: AStudentCompliantComponent },
          { path: 'a-student-list', component: AStudentListComponent },
          { path: 'a-student-leaves/:id', component: ViewSingleLeaveComponent},

        ]
      },

    ]
  },
];



@NgModule({
  declarations: [],

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AdminRoutingModule { }
