import { Component } from '@angular/core';
import { AuthServiceService } from '../../Service/auth-service.service';
import { EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-main-signup',
  templateUrl: './main-signup.component.html',
  styleUrl: './main-signup.component.css'
})
export class MainSignupComponent {
   Fname:boolean=false;
   Lname:boolean=false;
   Password:boolean=false;
   Email:boolean=false;
  Userform={
    fname:'',
    lname:'',
    email:'',
    password:''
  }
  constructor(private signupService: AuthServiceService){}
  onsubmit():void{
 this.Fname=false;
 this.Lname=false;
 this.Password=false;
 this.Email=false;
    if(this.Userform.fname==''){
 this.Fname=true;
    }else if(this.Userform.lname==''){
    this.Lname=true;
    }else if(this.Userform.password=='' ||  this.Userform.password.length < 8){
    this.Password=true;
    }else if(this.Userform.email === '' || !this.validateEmail(this.Userform.email)){
      this.Email=true;
    }else{
    console.log("this is me : ",this.Userform.lname);
    this.signupService.signUp(this.Userform).subscribe(
      (response) => {
        console.log('Signup successful:', response);
        this.signupService.setSignupResponseData(response);
      },
      (error) => {
        console.error('Signup failed:', error);

      }
    );
    }
  }
  private validateEmail(email: string): boolean {
    // Use a simple regex to check for a valid email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);}
}
