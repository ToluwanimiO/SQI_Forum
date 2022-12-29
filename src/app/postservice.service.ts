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
  public token = this.AuthGuardService.getToken();
  public headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  });
  // /api/v1/post/create/
  // http://sqiforum.herokuapp.com/api/v1/post/create/
  public getCategories() {
    return this.http.get<any>(`${this.baseUrl}/categories/`,{observe:'response',headers:this.headers},)
  }
  public postText(posttext) {
    // return this.http.post<any>(`${this.baseUrl}/post/create`, text)
    return this.http.post("https://sqiforum.herokuapp.com/api/v1/post/create/", posttext,{headers:this.headers})

  }
  public retrieveLists(){
    const token = this.AuthGuardService.getToken();
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get<any>(`${this.baseUrl}/post/list/`, {headers:this.headers});
  }
  public retrieveListDetail(slug,id){
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get<any>(`${this.baseUrl}/post/${slug}/${id}`, {headers:this.headers})
  }
  upvote(post_id){
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.post<any>(`${this.baseUrl}/post/${post_id}/upvote/`,"",{headers:this.headers})
  }

  public getPosts() {
      const token = this.AuthGuardService.getToken();
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
      });
        return this.http.get<any>(`${this.baseUrl}/post/{post}/{id}/comment/`, {headers})
  }

  public getPost(id: String) {
    const token = this.AuthGuardService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Access-Control-Allow-Origin': '*'
    });
      return this.http.get<any>(`${this.baseUrl}/post/{post}/{id}/comment/${id}`, {headers});
  }
}
