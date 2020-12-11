import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostserviceService } from '../postservice.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public msg = true;
    public isHomepageArray=[];
    public isCategoriesArray=['Tech','football','ICT','WebPrograming','Software','Tech','football','ICT','WebPrograming','Software','Tech','football','ICT','WebPrograming','Software']
    public categories = [];
    constructor(public categoryService: CategoryService, public snackbar:MatSnackBar, public postService:PostserviceService,public router:Router) { }

  ngOnInit(): void {
    // .....this is just for testing oooo from joshua
    // i udde the array of object to just to chech my interface .....
    //  this.isHomepageArray;
     this.isCategoriesArray;
     this.categoryService.getCategories().subscribe(data => {
      this.categories = data
      console.log(data);
      // this.isCategoriesArray = data
     })
     this.snackbar
     this.postService.retrieveLists().subscribe(data =>{
       this.isHomepageArray = data;
        this.msg = false;
       this.snackbar.open('Back online','Dismiss',{
        duration:3000
      });
       console.log(this.isHomepageArray)
      },(err:HttpErrorResponse) =>{
        if(err){
          this.snackbar.open('Disconnected','Dismiss',{});
          console.log(err)
        }
      });
    // console.log(ff);


  }
  viewPostDetails(id){
    console.log(id)
    this.router.navigate([`/postcontent/${id}`])
  }

}
