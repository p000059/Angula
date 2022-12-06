import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.css']
})
export class TwowaydatabindingComponent {

    name: string = "";

    person: any = {

      name: 'Marcelo',
      age: 20,
      status: true
    }

}
