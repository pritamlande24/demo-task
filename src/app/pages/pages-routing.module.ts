import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { StudentDisabledViewComponent } from './student-disabled-view/student-disabled-view.component';
import { TeacherStudentViewComponent } from './teacher-student-view/teacher-student-view.component';

const routes: Routes = [
  {
    path:"",
    component:IntroductionComponent
  },
  {
    path:"studentdisabledview",
    component:StudentDisabledViewComponent
  },
  {
    path:"teacherstudentview",
    component:TeacherStudentViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
