import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../core/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signUpMode: false;
  tester;
  constructor(private authService : AuthService) { 
    this.tester = this.authService.user.subscribe(
      (data) => {
        return data;
      }
    )
  }

  ngOnInit() {
  }

  onSignUp(form: NgForm){
    const data = form.value;
    console.log("Signing up. . .");
    this.authService.signUp(data.semail, data.spassword, data.displayName);
  }

  logout(){
    this.authService.logout()
  }

  onLogin(form: NgForm){
    const data = form.value;
    this.authService.login(data.lemail, data.lpassword);
  }

  test(){
    console.log(this.tester);
  }
}
