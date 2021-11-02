import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contacts
  messageform
  constructor(private fs:AngularFirestore) {
    this.fs.collection("contacts").snapshotChanges().subscribe((data)=>{
     this.contacts= data.map(element=>{
        return{
          id:element.payload.doc.id,
          firstname:element.payload.doc.data()['firstName'],
          lastname:element.payload.doc.data()['lastName'],
          message:element.payload.doc.data()['message'],
          time:element.payload.doc.data()['time'],
          email:element.payload.doc.data()['email']
        }
      })
    })
   }

  ngOnInit(): void {
  }

  details(message){
    this.messageform=message
  }
  delete(id){
    this.fs.collection("contacts").doc(id).delete()
  }
}
