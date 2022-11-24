import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {

  lastName: string = "da Silva";

  showFullName(fullName: any){
    alert(`Full Name is: ${fullName}`)
  }
}
