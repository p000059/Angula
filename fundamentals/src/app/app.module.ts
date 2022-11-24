import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { bodycomponent } from './componets/bodycomponent.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { PipeOperationPipe } from './pipe-operation.pipe';
import { OperationComponent } from './operation/operation.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderlistsComponent } from './renderlists/renderlists.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { LifeCicleComponent } from './life-cicle/life-cicle.component';
import { FatherLifeCicleComponent } from './father-life-cicle/father-life-cicle.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    bodycomponent,
    FirstComponentComponent,
    SecondComponentComponent,
    PipeOperationPipe,
    OperationComponent,
    TwoWayDataBindingComponent,
    RenderlistsComponent,
    CustomComponentComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    LifeCicleComponent,
    FatherLifeCicleComponent,
    CardComponent
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
