import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSignupComponent } from './Signup/main-signup/main-signup.component';
import { LoginComponent } from './Login/login/login.component';
import { Signup1Component } from './Signup/signup1/signup1.component';



const routes: Routes = [
  {path:'',component:MainSignupComponent},
  {path:'login',component:LoginComponent},
  {path:'signup1',component:Signup1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
