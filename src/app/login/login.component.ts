import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User } from 'firebase';
import { AuthService } from '../core/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signUpMode: false;
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  signUp(form: NgForm){
    const data = form.value;
    console.log("Signing up. . .");
    this.authService.signUp(data.lemail, data.lpassword);
  }

  test(){
    this.authService.test();
  }

  logout(){
    this.authService.logout()
  }

  onLogin(form: NgForm){
    const data = form.value;
    this.authService.login(data.lemail, data.lpassword);
  }

}
