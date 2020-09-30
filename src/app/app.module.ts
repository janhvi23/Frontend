import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { navBarMainComponent } from './navbarmain.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ApplicationForm1Component } from './application-form1/application-form1.component';
import { RegistrationForm1Component } from './registration-form1/registration-form1.component';
import { RegistrationForm2Component } from './registration-form2/registration-form2.component';
import { RegistrationForm3Component } from './registration-form3/registration-form3.component';
import { HttpClientModule} from '@angular/common/http';
import { RegistrationForm4Component } from './registration-form4/registration-form4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    navBarMainComponent,
    AboutUsComponent,
    ContactUsComponent,
    ApplicationForm1Component,
    RegistrationForm1Component,
    RegistrationForm2Component,
    RegistrationForm3Component,
    RegistrationForm4Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
