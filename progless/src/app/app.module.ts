import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { LessvariableComponent } from './lessvariable/lessvariable.component';
import { LessmixinsComponent } from './lessmixins/lessmixins.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LessvariableComponent,
    LessmixinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
