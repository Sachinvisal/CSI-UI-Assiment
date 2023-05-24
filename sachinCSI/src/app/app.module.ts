import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { BiographicInformationComponent } from './biographic-information/biographic-information.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactInformationComponent,
    GeneralInformationComponent,
    BiographicInformationComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
