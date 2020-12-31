import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerOneComponent } from './container-one/container-one.component';
import { ContainerTwoComponent } from './container-two/container-two.component';
import { ContainerThreeComponent } from './container-three/container-three.component';
import { ContainerFourComponent } from './container-four/container-four.component';
import { ContainerFiveComponent } from './container-five/container-five.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContainerOneComponent,
    ContainerTwoComponent,
    ContainerThreeComponent,
    ContainerFourComponent,
    ContainerFiveComponent,
    HomeContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
