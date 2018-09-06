import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user;

  constructor(private auth: AuthService) {
    this.auth.user.subscribe(
      (data) => {
        this.user = data;
      }
    )
   }

  ngOnInit() {
    console.log(this.user);
  }

}
