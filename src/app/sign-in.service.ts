import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(public http:HttpClient) { }
  public baseUrl = "http://sqiforum.herokuapp.com/api/v1"
  verifyLogin(loginDetails){
    return this.http.post<any>(`${this.baseUrl}/auth/login/`,loginDetails);
  }
  signOut(){
    return this.http.post<any>(`${this.baseUrl}/auth/logout/`,"");
  }
}
