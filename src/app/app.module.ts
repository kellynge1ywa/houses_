import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Navbar} from './components/navbar/navbar.component'
import { Home } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Home
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
