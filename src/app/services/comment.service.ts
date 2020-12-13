import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(public http:HttpClient) { }
  public baseUrl = "http://sqiforum.herokuapp.com/api/v1"
  sendComment(comment,slug,id){
    return this.http.post<any>(`${this.baseUrl}/post/${slug}/${id}/comment/`,comment);
  }
  sendReply(reply,id){
    console.log(reply)
    return this.http.post<any>(`${this.baseUrl}/comment/${id}/reply/`,reply);
  }
}
