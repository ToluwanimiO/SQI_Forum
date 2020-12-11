import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(public http: HttpClient) { }
  public baseUrl = "https://sqiforum.herokuapp.com/api/v1";
  // /api/v1/post/create/
  // http://sqiforum.herokuapp.com/api/v1/post/create/
  public getCategories() {
    return this.http.get<any>(`${this.baseUrl}/categories/`,{observe:'response'})
  }
  public postText(posttext) {
    // return this.http.post<any>(`${this.baseUrl}/post/create`, text)
    return this.http.post("https://sqiforum.herokuapp.com/api/v1/post/create/", posttext)

  }
  public retrieveLists(){
    return this.http.get<any>(`${this.baseUrl}/post/list/`);
  }
  public retrieveListDetail(slug,id){
    return this.http.get<any>(`${this.baseUrl}/post/${slug}/${id}`)
  }
}
