import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './FrontPage/Navbar/navbar/navbar.component';
import { ContactComponent } from './pages/Contact/contact/contact.component';
import { HomeComponent } from './pages/home/home/home.component';
import { MenuComponent } from './pages/Menu/menu/menu.component';
import { ProfileComponent } from './pages/Profile/profile/profile.component';
import { AboutComponent } from './pages/About/about/about.component';
import { FooterComponent } from './FrontPage/Footer/footer/footer.component';
import { MenupageComponent } from './pages/menupage/menupage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    MenuComponent,
    ProfileComponent,
    AboutComponent,
    FooterComponent,
    MenupageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
