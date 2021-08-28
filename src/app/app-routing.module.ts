import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MobilephonesComponent } from './electonics/mobilephones/mobilephones.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { LaptopsComponent } from './electronics/laptops/laptops.component';
import { WatchesComponent } from './electronics/watches/watches.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'all',component:AllComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'offers',component:OffersComponent},
  {path:'electronics',component:ElectronicsComponent,children:[
    {path:'mobilephones',component:MobilephonesComponent},
    {path:'laptops',component:LaptopsComponent},
    {path:'watches',component:WatchesComponent}
  ]},
  {path:'footer',component:FooterComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
