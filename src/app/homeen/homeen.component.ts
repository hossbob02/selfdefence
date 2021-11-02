import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homeen',
  templateUrl: './homeen.component.html',
  styleUrls: ['./homeen.component.css']
})
export class HomeenComponent implements OnInit {

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