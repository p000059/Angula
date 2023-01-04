import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CoursesComponent } from './courses/courses.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { PresentationComponent } from './presentation/presentation.component';

const APP_ROUTES: Routes = [
  { path: '', component: PresentationComponent },
  { path: 'experience', component: ExperiencesComponent },
  { path: 'course', component: CoursesComponent }
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES)

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
