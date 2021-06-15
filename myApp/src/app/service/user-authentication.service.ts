import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shareddata/user.component';


@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(private http : HttpClient) { }


  // POST - USER DATA FROM REGISTRATION FORM TO BACKEND
  registration(user:User){
    return this.http.post("http://localhost:8765/userAuth/registeruser",user);

  }
}


