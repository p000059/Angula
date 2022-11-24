import { Phone } from './../Types/Phone';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renderlists',
  templateUrl: './renderlists.component.html',
  styleUrls: ['./renderlists.component.css']
})
export class RenderlistsComponent {

  phones: Phone[] = [
    {
      id: 1,
      name: "Phone XL",
      description: "big phone",
      finished: false
    },
    {
      id: 2,
      name: "Phone SL",
      description: "small phone",
      finished: false
    },
    {
      id:3,
      name: "Normal",
      finished: true
    }
  ]

}
