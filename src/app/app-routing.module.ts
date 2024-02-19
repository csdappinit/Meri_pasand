import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSignupComponent } from './Signup/main-signup/main-signup.component';



const routes: Routes = [
  {path:'',component:MainSignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
