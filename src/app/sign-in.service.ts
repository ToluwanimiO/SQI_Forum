import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(public http:HttpClient) { }
  verifyLogin(loginDetails){
    return this.http.post<any>("http://sqiforum.herokuapp.com/api/v1/auth/login/",loginDetails);
  }
}
