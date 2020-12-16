import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(public http: HttpClient, public AuthGuardService: AuthGuardService) { }
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
  upvote(post_id){
    return this.http.post<any>(`${this.baseUrl}/post/${post_id}/upvote/`,"")
  }

  public getPosts() {
      const token = this.AuthGuardService.getToken();
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`});
        return this.http.get<any>(`${this.baseUrl}/post/{post}/{id}/comment/`, {headers})
  }

  public getPost(id: String) {
    const token = this.AuthGuardService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`});
      return this.http.get<any>(`${this.baseUrl}/post/{post}/{id}/comment/${id}`, {headers});
  }
}
