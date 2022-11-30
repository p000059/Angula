import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicecardService {

  constructor() { }

  getCourse(){

    return ['Java','DEVOPS','Cpp','Angular'];
  }
}
