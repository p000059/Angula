import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  namePortal: string;
  courses!: string[];

  constructor(public courseService: CourseService) { 

    this.namePortal = 'http://loiane.training';

    this.courses = this.courseService.getCouses();

  }

  ngOnInit(): void {
  }

}
