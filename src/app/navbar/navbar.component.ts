import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit() {
  }

  logout(){
    console.log("A THING", this.auth.user);
    this.auth.logout();
  }

}
