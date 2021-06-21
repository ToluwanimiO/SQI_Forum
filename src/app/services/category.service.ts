import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient) { }
  public baseUrl = "https://sqiforum.herokuapp.com/api/v1";
// for getting the categories
  public getCategories(){
    return this.http.get<any>(`${this.baseUrl}/categories/`);
  }
  public getProfile(id){
    return this.http.get<any>(`${this.baseUrl}/users/profile/${id}`);
  }
  public getPosts(){
    return this.http.get<any>(`${this.baseUrl}/post/list/`);
  }

  // public getCategoryByID(id){
  //   return this.http.get(`${this.baseUrl}/categories/${id}`);
  // }
}
