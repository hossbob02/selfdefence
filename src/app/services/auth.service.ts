import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Observable<firebase.User>
  constructor(private af:AngularFireAuth) {
    this.user=this.af.user
   }
}
