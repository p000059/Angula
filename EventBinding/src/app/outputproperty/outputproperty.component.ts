import { ServiceoutputpropertyService } from './serviceoutputproperty.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-outputproperty',
  templateUrl: './outputproperty.component.html',
  styleUrls: ['./outputproperty.component.css']
})
export class OutputpropertyComponent {

  valueNumber: number = 0;
  
  @ViewChild('inputVariable') fieldInputVariable!: HTMLElement;

  constructor(private outputservice: ServiceoutputpropertyService) {

  }

  eventIncrement() {
    
    console.log(this.fieldInputVariable)
    this.valueNumber = this.outputservice.getIncrement();
  }

  eventDecrement() {
    
    this.valueNumber = this.outputservice.getDecrement();
  }

}
