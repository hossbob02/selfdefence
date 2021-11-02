import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message
  constructor(private af:AngularFireAuth,private route:Router) { }

  ngOnInit(): void {
  }
login(f){
  let data=f.value
  this.af.signInWithEmailAndPassword(data.email,data.password).then(()=>{
    this.route.navigate(['/dashboard'])
  })
}
}
