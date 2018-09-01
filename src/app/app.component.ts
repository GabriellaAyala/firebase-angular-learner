import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: Observable<any[]>;
  constructor(public db: AngularFirestore) {
    this.message = db.collection('cities').valueChanges();
  }

  createCollection(){
    var citiesRef = this.db.collection("cities");

    citiesRef.doc("SF").set({
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"] });
    citiesRef.doc("LA").set({
        name: "Los Angeles", state: "CA", country: "USA",
        capital: false, population: 3900000,
        regions: ["west_coast", "socal"] });
    citiesRef.doc("DC").set({
        name: "Washington, D.C.", state: null, country: "USA",
        capital: true, population: 680000,
        regions: ["east_coast"] });
    citiesRef.doc("TOK").set({
        name: "Tokyo", state: null, country: "Japan",
        capital: true, population: 9000000,
        regions: ["kanto", "honshu"] });
    citiesRef.doc("BJ").set({
        name: "Beijing", state: null, country: "China",
        capital: true, population: 21500000,
        regions: ["jingjinji", "hebei"] });
      }

  getCollection(){
    // var docRef = this.db.collection("cities").doc("SF").ref;
    // docRef.get().then(
    //   (doc) => {
    //     console.log(doc.data());
    //   }
    // )

    // let collectionRef = this.db.firestore.collection('cities');

    // collectionRef.get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.id, "=>", doc.data());
    //   })
    // })

    let queryRef = this.db.collection('cities', ref => 
    ref.where("capital", "==", true).limit(2)//to sort, just chain
  ).valueChanges();


    queryRef.forEach((doc) => {
      console.log(doc);
    })

  }


}
