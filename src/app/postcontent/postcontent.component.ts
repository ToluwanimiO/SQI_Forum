import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor(public actRoute: ActivatedRoute, public postService:PostserviceService, public categories:CategoryService, public router:Router, public commentService:CommentService,public userService:UsersService) { }
  public postDetail;  
  public condition = true;
  public loading = false;
  public slug;
  public id;
  public userEmail;
  public text="";
  public sameCategory;
  ngOnInit(): void {
    this.slug = this.actRoute.snapshot.params.slug
    this.id = this.actRoute.snapshot.params.id
    this.postService.retrieveListDetail(this.slug,this.id).subscribe(data=>{
      this.postDetail = data;
      this.loading = true;
      console.log(data)
    })
    this.userService.getUserDetails().subscribe(userDetails=>{
      this.userEmail = userDetails.email;
    })
    this.categories.getCategories().subscribe(category=>{
      this.sameCategory = category.filter(each=>each.name == this.postDetail.category.title)

    })

  }

  handleCondition = () =>{
    this.condition = !this.condition
  }

  showProfile = () =>{
    this.router.navigate([`/profile/${this.postDetail.author.id}`])
  }
  sendComment(){
    let comment = {
      email:this.userEmail,
      body:this.text
    }
    this.commentService.sendComment(comment,this.slug,this.id,).subscribe(response=>{
      console.log(response)
    },(err:HttpErrorResponse)=>{
      console.log(err)
    })
  }

}
