import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCouses(){

    return ['Java','Angular','Ext JS'];
  }
}
