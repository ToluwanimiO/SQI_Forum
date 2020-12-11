import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostserviceService } from '../postservice.service';
import { CategoryService } from '../services/category.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public isHomepageArray=[];
    public categories = [];
    public loading = false;
    public loadingCategories = false;
    public LoginStatus = false;
    public userDet;
    constructor(public categoryService: CategoryService, public postService:PostserviceService,public router:Router,public userService:UsersService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
      this.loadingCategories = true;
      console.log(data);
    })
    this.postService.retrieveLists().subscribe(data=>{
       this.isHomepageArray = data;
       this.loading=true;
       console.log(this.isHomepageArray)
    })
    this.userService.getUserDetails().subscribe(userDetails=>{
      this.LoginStatus = true;
      this.userDet = userDetails;
        console.log(userDetails)
    },(err:HttpErrorResponse)=>{
      this.LoginStatus = false;
      console.log(err)
    })

  }
  viewPostDetails(id){
    console.log(id)
    this.router.navigate([`/postcontent/${id}`])
  }

}
