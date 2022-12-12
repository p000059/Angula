import { course } from './course';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScourseService {

  constructor(private objCourse: course) { 

  }

  getSCourse(){

    return ['Java','Angula','Less','SASS']
  }
}
