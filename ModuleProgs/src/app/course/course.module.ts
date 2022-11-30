import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';


//Function Module
@NgModule({
  declarations: [
    CourseComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule { }
