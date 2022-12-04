import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { EventbidingComponent } from './eventbiding/eventbiding.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    EventbidingComponent,
    TwowaydatabindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
