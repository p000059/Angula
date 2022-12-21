import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListserviceService {

  private lstCourse: string[] = ['Java','Cpp','Angular','JavaScript','SCSS','Styled Components','React']

  constructor() {
    console.log('Instance Service ListService')
  }

  getCourse(){

    return this.lstCourse;  
  }

  addCourse(course: string){
    this.lstCourse.push(course)
  }
}
