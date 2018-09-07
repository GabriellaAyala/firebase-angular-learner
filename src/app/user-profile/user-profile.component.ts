import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { User } from '../core/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  user: User = {
    uid: '',
    email: '',
    displayName: 'Loading. . .',
    roles : {}
  };

  subscription: Subscription;

  constructor(private auth: AuthService) {
    this.subscription = this.auth.user.subscribe(
      (data) => {
        this.user = data;
        console.log("USER SET", this.user);
      }
    )
   }

  ngOnInit() {
    console.log("USER", this.user);
  }

  ngOnDestroy(){
    console.log("Destroyed");
    this.subscription.unsubscribe();
  }

}
