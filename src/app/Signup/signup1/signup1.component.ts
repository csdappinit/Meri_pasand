import { Component } from '@angular/core';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrl: './signup1.component.css'
})
export class Signup1Component {
  btn:boolean=false;
  currentTab = 0;
  formData = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    dd: '',
    mm: '',
    yyyy: '',
    uname: '',
    pword: ''
  };

  steps = [
    'Name',
    'Contact Info',
    'Birthday',
    'Login Info'
  ];

  nextTab() {
    if (this.currentTab < this.steps.length - 1) {
      this.currentTab++;
    }
    if(this.currentTab==0){
      this.btn=false;
    }else{
      this.btn=true;
    }
    
  }

  prevTab() {
    if (this.currentTab > 0) {
      this.currentTab--;
    }
    if(this.currentTab==0){
      this.btn=false;
    }else{
      this.btn=true;
    }
  }

  onSubmit() {
    // Here you can handle form submission
    console.log(this.formData);
  }

}
