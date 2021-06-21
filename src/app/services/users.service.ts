import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }
  public baseUrl = "https://sqiforum.herokuapp.com/api/v1";
  getUserDetails(){
    return(this.http.get<any>(`${this.baseUrl}/auth/user/`))
  }
}
