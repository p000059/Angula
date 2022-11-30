import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  portalName: string;

  cars: string[] = ['Fox','Corsa','Onix','Gladius','CBR600rr'];

  constructor() {

    this.portalName = "https://github.com/p000059/Angular";

    this.cars.forEach(element => {
      element.toString();
    });
  }

  ngOnInit(): void {
  }

}
