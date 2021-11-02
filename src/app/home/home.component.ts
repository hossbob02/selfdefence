import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  constructor(private route:ActivatedRoute,private fs:AngularFirestore) {
   
  }

  ngOnInit(): void {}
  contactAdmin(f){
    let data=f.value
 //   console.log(data)
    let date=new Date().toLocaleString()
    this.fs.collection("contacts").add({
      email:data.email,
      message:data.message,
      firstName:data.firstname,
      lastName:data.lastname,
      time:date
    }).then(()=>{
      window.location.reload()
    })
  }
}
