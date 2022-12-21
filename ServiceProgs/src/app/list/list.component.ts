import { Component, OnInit, EventEmitter } from '@angular/core';
import { ListserviceService } from './listservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  createdCourse = new EventEmitter<string>();
  list_course: string[] = [];

  constructor(private listService: ListserviceService) {

    this.list_course = this.listService.getCourse();
  }

  onAddCourse(course: string){

    this.listService.addCourse(course)
    this.createdCourse.emit(course)
  }
}
