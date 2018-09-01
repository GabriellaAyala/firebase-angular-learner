import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated;

  constructor(private afAuth : AngularFireAuth) {
    this.afAuth.authState.subscribe(
      (user) => {
        if(user) {
          this.isAuthenticated = true;      
        } else {
          this.isAuthenticated = false; 
        }
      })
  }



  login(email, password){
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signUp(email, password){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  test(){
    console.log(this.isAuthenticated);
  }

  logout(){
    this.afAuth.auth.signOut()
  }
}
