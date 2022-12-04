import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbiding',
  templateUrl: './eventbiding.component.html',
  styleUrls: ['./eventbiding.component.css']
})
export class EventbidingComponent implements OnInit {
  
  currentValue: string = "";

  onKeyUp(event: KeyboardEvent) {
    
    this.currentValue = (<HTMLInputElement>event.target).value;
  }

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick() {
    alert('Button Click');
  }

}
