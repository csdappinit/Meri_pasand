import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSignupComponent } from './Signup/main-signup/main-signup.component';
import { Signup1Component } from './Signup/signup1/signup1.component';
import { LoginComponent } from './Login/login/login.component';
import { FormsModule } from '@angular/forms';
import { Signup1MainComponent } from './Signup/signup1-main/signup1-main.component';
import { Signup2Component } from './Signup/signup2/signup2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSignupComponent,
    Signup1Component,
    LoginComponent,
    Signup1MainComponent,
    Signup2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
