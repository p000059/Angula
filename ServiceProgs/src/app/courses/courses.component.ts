import { Component, OnInit } from '@angular/core';
import { ServicecoursesService } from './servicecourses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  lstCourse: string[] = []

  constructor(private sCourse: ServicecoursesService) { }

  ngOnInit(): void {
    
    this.lstCourse = this.sCourse.getCourses();
  }


}
