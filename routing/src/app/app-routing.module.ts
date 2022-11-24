import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { PageProtectedComponent } from './page-protected/page-protected.component';
import { PageWithParamenterComponent } from './page-with-paramenter/page-with-paramenter.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

  {path: "first-page", component: FirstPageComponent},
  {path: "second-page", component: SecondPageComponent},
  {path: "third-page", component: ThirdPageComponent},
  {path: "", redirectTo: "firt-page", pathMatch: "full"},
  {path: "page-with-parameter/:id", component: PageWithParamenterComponent},
  {path: "page-protected", component: PageProtectedComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  {path: "**", component: NotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
