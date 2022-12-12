import { ScourseService } from './scourse.service';
import { Component, OnInit } from '@angular/core';

import { course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  arrayCourse: string[] = []

  constructor(private iCourse: ScourseService) {

  }
  ngOnInit(): void {
    
    this.create()
  }

  create() {

    this.arrayCourse = this.iCourse.getSCourse();
  }

}
