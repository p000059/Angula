import { SPersonService } from './s-person.service';
import { Person } from './Person';
import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {

  lstPerson: Person[] = []
  
  constructor(private iPerson: SPersonService){

  }

  create(objPerson: Person){
    this.iPerson.createPerson(objPerson)
  }

  read(){
    this.iPerson.readPerson()
  }
}
