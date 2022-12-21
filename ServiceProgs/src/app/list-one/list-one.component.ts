import { ListserviceService } from './../list/listservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-one',
  templateUrl: './list-one.component.html',
  styleUrls: ['./list-one.component.css']
})
export class ListOneComponent implements OnInit {

  lstCourse: string[] = []

  constructor(private iCourse: ListserviceService) { 

    this.lstCourse = this.iCourse.getCourse();
  }


  ngOnInit(): void {

    
  }

}
