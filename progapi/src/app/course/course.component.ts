import { CourseserviceService } from './courseservice.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  url = 'http://localhost/api/php/';

  aCourse: Course[] = [];

  insCourse = new Course();

  constructor(private iCourse: CourseserviceService) {

  }

  ngOnInit(): void {

    
  }

  create() {

    this.iCourse.create(this.insCourse).subscribe(
      (res: Course[]) => {
        this.aCourse = res;

        this.insCourse.name = "";
        this.insCourse.value = 0;

        this.readAll();
      }
    )
  }

  readAll(){

    this.iCourse.readAll().subscribe(
      (res: Course[]) => {
        
        this.aCourse = res;
      }
    )
  }

  read() {

    alert('read')
  }

  update() {

    this.iCourse.update(this.insCourse).subscribe(
      (res) => {
        this.aCourse = res;

        this.insCourse.name = "";
        this.insCourse.value = 0;
      }
    )
  }

  delete() {

    this.iCourse.delete(this.insCourse).subscribe(
      (res: Course[]) => {
        this.insCourse.name = "";
        this.insCourse.value = 0;
        this
      }
    )
  }

  findCourse(objCourse: Course){

    this.insCourse.id = objCourse.id;
    this.insCourse.name = objCourse.name;
    this.insCourse.value = objCourse.value;
  }

}
