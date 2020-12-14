import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostserviceService } from '../postservice.service';
import { CategoryService } from '../services/category.service';
import { UsersService } from '../services/users.service';
import { SignInService } from '../sign-in.service';

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
    public searchText;
    constructor(public snackbar:MatSnackBar,public signOut:SignInService, public categoryService: CategoryService, public postService:PostserviceService,public router:Router,public userService:UsersService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {

      this.snackbar.open('Back online','Dismiss',{
        duration:3000
      });
      this.categories = data
      this.loadingCategories = true;
      console.log(data);
    },(err:HttpErrorResponse)=>{
        if(err){
          this.snackbar.open('Disconnected','Dismiss')
        }
    })
    this.postService.retrieveLists().subscribe(data=>{
       this.isHomepageArray = data;
       this.loading=true;
       console.log(this.isHomepageArray)
    })
    this.snackbar;
    this.userService.getUserDetails().subscribe(userDetails=>{
     
      this.LoginStatus = true;
      this.userDet = userDetails;
        console.log(userDetails)
    },(err:HttpErrorResponse)=>{
        this.LoginStatus = false;
        console.log(err)
    });

  }
  logOut(){
    this.signOut.signOut().subscribe(out=>{
      localStorage.removeItem("Token");
      this.router.navigate(['/signIn'])
      console.log(out)
    })
  }
  viewPostDetails(id){
    console.log(id)
    this.router.navigate([`/postcontent/${id}`])
  }
  viewSearchText(e){
    this.searchText = e;
  }
}
