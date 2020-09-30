import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ApplicationForm1Component } from './application-form1/application-form1.component';
import { RegistrationForm1Component } from './registration-form1/registration-form1.component';
import { RegistrationForm2Component } from './registration-form2/registration-form2.component';
import { RegistrationForm3Component } from './registration-form3/registration-form3.component';
import {RegistrationForm4Component} from './registration-form4/registration-form4.component';
const routes: Routes = [

  {path: '', component: HomeComponent },
  {path: 'aboutUs', component: AboutUsComponent },
  {path: 'contactUs', component: ContactUsComponent },
  {path: 'appFormOne',component: ApplicationForm1Component},
  {path: 'registerApplicant',component:RegistrationForm1Component},
  {path: 'registerVehicle',component:RegistrationForm2Component},
  {path: 'registerPersonal',component:RegistrationForm1Component},
  {path: 'registerEmployment', component:RegistrationForm3Component},
  {path: 'registerIdentity',component:RegistrationForm4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
