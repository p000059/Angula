import { Component, OnInit } from '@angular/core';
import { ListserviceService } from './listservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  name_course: string = "";
  list_course: string[] = [];

  constructor(listService: ListserviceService) { }

  service = new ListserviceService();

}
