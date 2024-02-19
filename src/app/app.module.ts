import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSignupComponent } from './Signup/main-signup/main-signup.component';
import { Signup1Component } from './Signup/signup1/signup1.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSignupComponent,
    Signup1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
