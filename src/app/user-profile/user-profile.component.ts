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
  user: User;
  //  = {     //Initializing the user at the beginning works, seems there'd be a better way
  //   uid: '',
  //   email: '',
  //   displayName: 'Loading. . .',
  //   roles : {}
  // };

  subscription: Subscription;

  constructor(private auth: AuthService) {
    this.subscription = this.auth.user.subscribe(
      (data) => {
        this.user = data;
      }
    )
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log("Destroyed");
    this.subscription.unsubscribe();
  }

}
