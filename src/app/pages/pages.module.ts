import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { TeacherStudentViewComponent } from './teacher-student-view/teacher-student-view.component';
import { StudentDisabledViewComponent } from './student-disabled-view/student-disabled-view.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    IntroductionComponent,
    TeacherStudentViewComponent,
    StudentDisabledViewComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatTabsModule,
  ]
})
export class PagesModule { }
