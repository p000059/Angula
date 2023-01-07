import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CoursesComponent } from './courses/courses.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AcademicformationComponent } from './academicformation/academicformation.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ContentsComponent } from './contents/contents.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    CoursesComponent,
    PresentationComponent,
    AcademicformationComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CardComponent,
    ContentsComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
