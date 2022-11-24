import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';

  constructor(
    private router: Router
  ){}

  moveFirstPage(){
    this.router.navigate(["first-page"])
  }

  moveSecondPage(){
    this.router.navigate(["second-page"])
  }

  moveThirdPage(){
    this.router.navigate(["third-page"])
  }

  movePageWithParamenter(){
    this.router.navigate(["page-with-parameter"])
  }

  movePageProtected(){
    this.router.navigate(["page-protected"])
  }

  movePageLogin(){
    this.router.navigate(["login"])
  }
}
