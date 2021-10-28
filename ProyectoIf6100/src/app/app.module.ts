import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';



import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {CommonModule } from '@angular/common';


import { GeneralPageComponent } from './general-page/general-page.component';
import { RequirementsPageComponent } from './requirements-page/requirements-page.component';
import { ContentsPageComponent } from './contents-page/contents-page.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    AppComponent,
    GeneralPageComponent,
    RequirementsPageComponent,
    ContentsPageComponent,
    CoursePageComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
