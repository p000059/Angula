import { AcademicformationComponent } from './academicformation/academicformation.component';
import { SummarizedcurriculumComponent } from './summarizedcurriculum/summarizedcurriculum.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperiencesComponent } from './experiences/experiences.component';
import { PresentationComponent } from './presentation/presentation.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', component: PresentationComponent },
  { path: 'experience', component: ExperiencesComponent },
  { path: 'course', component: CoursesComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'curriculum', component: SummarizedcurriculumComponent },
  { path: 'academic', component: AcademicformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
