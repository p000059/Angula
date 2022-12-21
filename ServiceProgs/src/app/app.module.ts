import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { ListserviceService } from './list/listservice.service';
import { ListOneComponent } from './list-one/list-one.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    ListOneComponent,
    
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [
    ListserviceService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
