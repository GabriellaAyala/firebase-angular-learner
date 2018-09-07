import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated;
  user: Observable<User>;

  constructor(private afAuth : AngularFireAuth,
              private db : AngularFirestore) {

    this.user = this.afAuth.authState.pipe(switchMap(
      user => {
        if (user) {
          this.isAuthenticated = true;
          return this.db.doc<User>('users/${user.uid}').valueChanges();
        } else {
          return of(null);
        }
      }
    ))
  }



  
  signUp(email, password, displayName){
    console.log("signing up")
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(
      (data) => {
        data.user.updateProfile({
          displayName: displayName,
          photoURL: ''
        })
      }
    ).then(
      () => {
        console.log("All signed up")
      }
    )
    .catch(
      () => {
        "Something happened. . ."
      }
    );
  }

  updateUser(user) {
    const userRef: AngularFirestoreDocument<any> = this.db.doc('users/${user.uid}');
    const data: User ={
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      roles : {
        subscriber : true
      }
    }
    return userRef.set(data, {merge : true});
  }
  
  login(email, password){
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      credential => {
        console.log("Signed in. . .", credential);
        this.updateUser(credential.user);
      }
    ).catch(
      () => {
        console.log("Something happened. . ")
      }
    );
  }


  logout(){
    this.afAuth.auth.signOut()
  }

  canRead(user: User): boolean {
    const allowed = ['subscriber'];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: User):boolean{
    const allowed = ['editor'];
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: User):boolean{
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  checkAuthorization(user: User, allowedRoles: string[]): boolean{
    if(!user) return false;
    for(const role of allowedRoles){
      if(user.roles[role]){
        return true;
      }
    }
    return false; 
  }
}
