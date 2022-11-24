import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-life-cicle',
  templateUrl: './life-cicle.component.html',
  styleUrls: ['./life-cicle.component.css']
})
export class LifeCicleComponent implements OnInit, OnChanges, OnDestroy {
  
  time = new Date();
  timer: any = null!;
  
  @Input() text = "";
  
  ngOnInit(): void {
    
    console.log("Event Fired!");
    this.timer = setInterval(() => this.time = new Date(), 1000);
    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("The onChange triggered the changes: " + changes);
  }
  
  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}
