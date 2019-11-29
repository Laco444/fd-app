import { Component } from '@angular/core';
import ChatItem from './Chatitem';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textMessage =""
  private itemsCollection : AngularFirestoreCollection<ChatItem>;

  constructor(private afs: AngularFirestore){
    this.itemsCollection = afs.collection<ChatItem>('lobby');
  }
  
  doIt(){
    console.log(this.textMessage)
    this.itemsCollection.add({
      sender: "Crerop",
      message: this.textMessage
    })
    this.textMessage = ""
  }
}
