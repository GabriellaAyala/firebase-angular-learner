import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message;

  constructor(public db: AngularFirestore) {
    this.message = this.db.collection("users").valueChanges();
  }

  createCollection(){
    this.db.collection("testing").add({
      message : "Working!"
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    }).catch((error) => {
      console.log("Error adding document: ", error);
    });

    console.log("Collection created!");
  }

  getCollection(){
    console.log(this.db.collection("users"));
    console.log(this.message.message);
  }
}
