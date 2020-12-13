import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {
  public category = "Web Development";
  public topicsArray = [{}];
public categories=[{}]
  constructor(public categoryArr :CategoryService, public actRoute:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.categoryArr.getPosts().subscribe(data=>{
      let post = data.filter(each=>each.category.name == this.actRoute.snapshot.params.name)
      this.topicsArray = post
      console.log(post)
    })
    this.categoryArr.getCategories().subscribe(data=>{
      this.categories = data
    })
  }
  viewPostDetails = (slug, id) =>{
    this.router.navigate([`/postcontent/${slug}/${id}`])
  }

}
