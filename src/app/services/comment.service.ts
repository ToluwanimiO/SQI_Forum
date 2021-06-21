import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(public http:HttpClient) { }
  public baseUrl = "https://sqiforum.herokuapp.com/api/v1"
  sendComment(comment,slug,id){
    return this.http.post<any>(`${this.baseUrl}/post/${slug}/${id}/comment/`,comment);
  }
  sendReply(reply,id){
    console.log(reply)
    return this.http.post<any>(`${this.baseUrl}/comment/${id}/reply/`,reply);
  }
  likeComment(idComment){
    return this.http.post<any>(`${this.baseUrl}/comment/${idComment}/upvote/`,"")
  }
}
