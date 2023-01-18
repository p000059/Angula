import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private x: any

  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  myFunction() {
    this.x = document.getElementById("myTopnav")
    if (this.x.className === "topnav") {
      this.x.className += "responsive"
    } else {
      this.x.className = "topnav"
    }
  }
}
