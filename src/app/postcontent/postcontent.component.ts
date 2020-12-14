import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostserviceService } from '../postservice.service';
import { CategoryService } from '../services/category.service';
import { CommentService } from '../services/comment.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-postcontent',
  templateUrl: './postcontent.component.html',
  styleUrls: ['./postcontent.component.css']
})
export class PostcontentComponent implements OnInit {
  @ViewChild('inputReply') replyTextInput:ElementRef;
  constructor(public actRoute: ActivatedRoute, public postService:PostserviceService, public categories:CategoryService, public router:Router, public commentService:CommentService,public userService:UsersService) { }
  public postDetail;  
  public condition = true;
  public condition2 = true;
  public loading = false;
  public slug;
  public id;
  public userEmail;
  public text="";
  public sameCategory;
  public reply_text="";
  public upvoteLength;
  public upvoteReplyLength;
  public commentLength;
  public commentReplyLength;
  public CategoryName
  ngOnInit(): void {
    this.slug = this.actRoute.snapshot.params.slug
    this.id = this.actRoute.snapshot.params.id
    this.postService.retrieveListDetail(this.slug,this.id).subscribe(data=>{
      this.postDetail = data;
      this.loading = true;
      this.upvoteLength = data.upvotes.length
      this.commentLength = data.non_reply_comments.length
      console.log(data)
    })
    this.userService.getUserDetails().subscribe(userDetails=>{
      this.userEmail = userDetails.email;
    })
    this.categories.getPosts().subscribe(data=>{
      this.sameCategory = data.filter(each=>each.category.slug == this.postDetail.category.slug)
      console.log(this.sameCategory)
      this.CategoryName = this.postDetail.category.name
    })

  }
  viewPost(slug,id){
    this.router.navigate([`/postcontent/${slug}/${id}`])
    this.postService.retrieveListDetail(slug,id).subscribe(data=>{
      this.postDetail = data;
      this.loading = true;
      this.upvoteLength = data.upvotes.length
      this.commentLength = data.non_reply_comments.length 
      console.log(data)
    })
  }
  replyInput(e){
    this.reply_text = e.target.value
  }
  handleCondition = () =>{
    this.condition = !this.condition
    this.postService.upvote(this.postDetail.id).subscribe(count=>{
      this.upvoteLength=count.upvote_count
      console.log(count)
    })
  }
  likeComment(comments_id){
    this.condition2 = !this.condition2

    this.commentService.likeComment(comments_id).subscribe(count=>{
      console.log(count)
    })
  }

  showProfile = () =>{
    this.router.navigate([`/profile/${this.postDetail.author.id}`])
  }
  showCommenterProfile = (id) =>{
    this.router.navigate([`/profile/${id}`])
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
      // this.postDetail.post_comments = [{...comment, },...this.postDetail.post_comments]
    },(err:HttpErrorResponse)=>{
      console.log(err)
    })
    // this.router.navigate([`/postcontent/${this.slug}/${this.id}`])
    // 
  }
  sendReply(comments_id){
    console.log('ki')
    let comment = {
      email:this.userEmail,
      body:this.reply_text
    }
    this.commentService.sendReply(comment,comments_id).subscribe(response=>{
      console.log(response)
      let inp = document.getElementById('sc'+comments_id)
      // inp.value = '';
      // console.log(this.replyTextInput.nativeElement.value)
      // this.replyTextInput.nativeElement.value = "";
      // this.reply_text = ""
      // this.commentLength = this.commentLength+1
    },(err:HttpErrorResponse)=>{
      console.log(err)
    })
    
  }

}
