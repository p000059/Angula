import { Person } from './Person';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SPersonService {

  lstPerson: Person[] = []

  constructor() { }

  createPerson(objPerson: Person){
    this.lstPerson.push(objPerson)
  }

  readPerson(){
    
    return this.lstPerson

  }

  // increment(element){

  //   let tr = document.createElement('tr')

  //   for (let i in element){

  //     let td = document.createElement('td')
  //     td.innerHTML = element[i]
  //     tr.appendChild(td)
  //   }

  //   return tr;
  // }
  
}
