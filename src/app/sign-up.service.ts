import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(public http:HttpClient) { }
  // public baseUrl ="https://sqiforum.herokuapp.com/api/v1/rest-auth";
  // public baseUrl = ;
  addNewUser(user){
    // console.log(user)
    return this.http.post<any>("http://sqiforum.herokuapp.com/api/v1/auth/registration/",user);
  }
}
