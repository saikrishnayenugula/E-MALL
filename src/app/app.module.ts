import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { SignupComponent } from './signup/signup.component';
import { AllComponent } from './all/all.component';
import { OffersComponent } from './offers/offers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MobilephonesComponent } from './electonics/mobilephones/mobilephones.component';
import { LaptopsComponent } from './electronics/laptops/laptops.component';
import { WatchesComponent } from './electronics/watches/watches.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    ElectronicsComponent,
    SignupComponent,
    AllComponent,
    OffersComponent,
    ContactusComponent,
    FooterComponent,
    PagenotfoundComponent,
    MobilephonesComponent,
    LaptopsComponent,
    WatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
