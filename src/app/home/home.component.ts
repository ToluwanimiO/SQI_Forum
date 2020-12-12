import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostserviceService } from '../postservice.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // public isHomepageArray = [

  //                           {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'hacks', upvote:'200',date:'19-4-2019',views:28},
  //                           {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'bamm', upvote:'200',date:'19-4-2019',views:28},
  //                           {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'booms', upvote:'200',date:'19-4-2019',views:28},
  //                           {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'hacks', upvote:'200',date:'19-4-2019',views:28},
  //                           {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'hacks', upvote:'200',date:'19-4-2019',views:28},
  //                           {topic:'Lorem icategories:'hacks', upvote:'200',date:'19-4-2019',views:28},
  //                           {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'hacks', upvote:'200',date:'19-4-2019',views:28},
  //                           {topic:'Lorem ipsum dolor sit aconsectetur adipisicing'psum dolor sit aconsectetur adipisicing', categories:'hacks', upvote:'200',date:'19-4-2019',views:28},
  //                           {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'hacks', upvote:'200',date:'19-4-2019',views:28},
  //                           {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'hacks', upvote:'200',date:'19-4-2019',views:28},
  //                           {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'hacks', upvote:'200',date:'19-4-2019',views:28},
  //                           {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', , categories:'hacks', upvote:'200',date:'19-4-2019',views:28},
  //                           ];
    public isHomepageArray=[];
    public isCategoriesArray=['Tech','football','ICT','WebPrograming','Software','Tech','football','ICT','WebPrograming','Software','Tech','football','ICT','WebPrograming','Software']
    public categories = [];
    constructor(public categoryService: CategoryService, public postService:PostserviceService,public router:Router) { }

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
     this.postService.retrieveLists().subscribe(data=>{
       this.isHomepageArray = data;
       console.log(this.isHomepageArray)
      })
    // console.log(ff);


  }
  viewPostDetails(id){
    console.log(id)
    this.router.navigate([`/postcontent/${id}`])
  }

}
