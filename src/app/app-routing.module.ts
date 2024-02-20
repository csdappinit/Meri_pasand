import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSignupComponent } from './Signup/main-signup/main-signup.component';
import { LoginComponent } from './Login/login/login.component';
import { Signup1Component } from './Signup/signup1/signup1.component';
import { Signup1MainComponent } from './Signup/signup1-main/signup1-main.component';

import { Signup2Component } from './Signup/signup2/signup2.component';



const routes: Routes = [
  {path:'',component:MainSignupComponent},
  {path:'login',component:LoginComponent},
  {path:'signup1',component:Signup1Component},
  {path:'signup1main',component:Signup1MainComponent},
  {path:'signup2' , component:Signup2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
