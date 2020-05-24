import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navbar1Component } from './components/header/navbar1/navbar1.component';
import { FirstbarComponent } from './components/header/firstbar/firstbar.component';
import { LoginComponent } from './components/compte/login/login.component';
import { RegisterComponent } from './components/compte/register/register.component';
import { AboutusComponent } from './components/footer/about/aboutus/aboutus.component';
import { SocialmediaComponent } from './components/footer/about/socialmedia/socialmedia.component';
import { AllfooterComponent } from './components/footer/allfooter/allfooter.component';
import { CopyrightComponent } from './components/footer/copyright/copyright.component';
import { AllcompteComponent } from './components/compte/allcompte/allcompte.component';



@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    FirstbarComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    SocialmediaComponent,
    AllfooterComponent,
    CopyrightComponent,
    AllcompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
