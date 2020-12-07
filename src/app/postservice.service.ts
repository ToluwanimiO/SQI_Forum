import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(public http: HttpClient) { }
  public baseUrl = "https://sqiforum.herokuapp.com/api/v1";

  public getCategories() {
    return this.http.get<any>(`${this.baseUrl}/categories/`)
  }
  public postText(text) {
    return this.http.post<any>(`${this.baseUrl}/post/create`, text)
  }
}
