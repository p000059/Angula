import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {

  ImagePath: string = ''

  constructor(){
    this.ImagePath = '/assets/cv1.jpeg'
  }
}
