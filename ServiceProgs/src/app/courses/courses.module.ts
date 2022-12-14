import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicecoursesService } from './servicecourses.service';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CoursesModule],
  providers: [
    ServicecoursesService
  ]
})
export class CoursesModule { }
