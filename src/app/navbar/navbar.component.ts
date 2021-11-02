import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  uid
  user
  constructor(private route:ActivatedRoute,private af:AngularFireAuth,private router:Router,private as:AuthService) { 
    this.as.user.subscribe(user=>{
      if(user){
        this.uid=user.uid
        return this.user=true
      }else{
        this.user=false
      }
    })
  }

  ngOnInit(): void {
  }

 logout(){
   this.af.signOut().then(()=>{
    this.router.navigate(['/'])
   })
 }

  
}
