import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/About/about/about.component';
import { HomeComponent } from './pages/home/home/home.component';
import { MenuComponent } from './pages/Menu/menu/menu.component';
import { ProfileComponent } from './pages/Profile/profile/profile.component';
import { ContactComponent } from './pages/Contact/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"menu",component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'About',component:AboutComponent},
  {path:"profile",component:ProfileComponent},
  {path:"contact",component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
