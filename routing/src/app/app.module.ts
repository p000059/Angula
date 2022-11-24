import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstPageComponent } from './first-page/first-page.component';
import { CardComponent } from './card/card.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdComponent } from './third/third.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PageWithParamenterComponent } from './page-with-paramenter/page-with-paramenter.component';
import { PageProtectedComponent } from './page-protected/page-protected.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    CardComponent,
    SecondComponentComponent,
    SecondPageComponent,
    ThirdComponent,
    ThirdPageComponent,
    NotfoundComponent,
    PageWithParamenterComponent,
    PageProtectedComponent,
    LoginComponent
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
