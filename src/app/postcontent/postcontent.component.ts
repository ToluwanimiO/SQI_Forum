import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostserviceService } from '../postservice.service';
import { CommentService } from '../services/comment.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-postcontent',
  templateUrl: './postcontent.component.html',
  styleUrls: ['./postcontent.component.css']
})
export class PostcontentComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute, public postService:PostserviceService,public commentService:CommentService,public userService:UsersService) { }
  public postDetail;  
  public condition = true;
  public loading = false;
  public slug;
  public id;
  public userEmail;
  public text="";
  public upvoteLength;
  public commentLength;
  ngOnInit(): void {
    this.slug = this.actRoute.snapshot.params.slug
    this.id = this.actRoute.snapshot.params.id
    this.postService.retrieveListDetail(this.slug,this.id).subscribe(data=>{
      this.postDetail = data;
      this.loading = true;
      this.upvoteLength = data.upvotes.length
      this.commentLength = data.post_comments.length
      console.log(data)
    })
    this.userService.getUserDetails().subscribe(userDetails=>{
      this.userEmail = userDetails.email;
        console.log(userDetails)
    })

  }

  handleCondition = () =>{
    this.condition = !this.condition
    this.postService.upvote(this.postDetail.id).subscribe(count=>{
      this.upvoteLength=count.upvote_count
      console.log(count)
    })
    
  }
  sendComment(){
    let comment = {
      email:this.userEmail,
      body:this.text
    }
    this.commentService.sendComment(comment,this.slug,this.id,).subscribe(response=>{
      console.log(response)
      this.text = ""
      this.commentLength = this.commentLength+1
    },(err:HttpErrorResponse)=>{
      console.log(err)
    })
  }

}
