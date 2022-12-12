import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { ListserviceService } from './list/listservice.service';
import { CourseComponent } from './course/course.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    CourseComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ListserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
