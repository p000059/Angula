import { Person } from './../person/Person';
import { Injectable } from '@angular/core';
import { observeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreateService {

  lstPerson: Person[] = []
  name: string = ""
  age: number = 0
  email: string = ""

  constructor() { }

  createPerson(objPerson: Person){
    
    this.name = objPerson.name
    this.age = objPerson.age
    this.email = objPerson.email
    
    this.lstPerson.push(objPerson)

    return objPerson;
  }
}
