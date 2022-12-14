import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicecoursesService {

  constructor() { }

  getCourses(){

    return ['SCSS','Java','ASP.NET','LESS','Javascript','Phyton','C++','Angular','ReactJS','VueJS']
  }
}
