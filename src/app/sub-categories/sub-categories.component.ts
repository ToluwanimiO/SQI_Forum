import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {
  public category;;
  public topicsArray = [{}];
  public categories=[{}]
  public loading = false;
  let 
  constructor(public categoryArr :CategoryService, public actRoute:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.categoryArr.getCategories().subscribe(data=>{
      this.categories = data
    })
    this.categoryArr.getPosts().subscribe(data=>{
      this.category = this.actRoute.snapshot.params.name;
      let post = data.filter(each=>each.category.name == this.actRoute.snapshot.params.name)
      if(post.length > 0){
        this.topicsArray = post
        this.loading = true
      } else{
        this.router.navigate(['/categories'])
      }
      
      console.log(post)
    })
  }
  viewPostDetails = (slug, id) =>{
    this.router.navigate([`/postcontent/${slug}/${id}`])
  }

}
