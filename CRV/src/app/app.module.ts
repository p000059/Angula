import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcademicformationComponent } from './academicformation/academicformation.component';
import { CardComponent } from './card/card.component';
import { ContentsComponent } from './contents/contents.component';
import { CoursesComponent } from './courses/courses.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SummarizedcurriculumComponent } from './summarizedcurriculum/summarizedcurriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    AcademicformationComponent,
    CardComponent,
    ContentsComponent,
    CoursesComponent,
    ExperiencesComponent,
    FooterComponent,
    HeaderComponent,
    PresentationComponent,
    ContactsComponent,
    NavbarComponent,
    SummarizedcurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
