import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
public categoriesArray;
public loading = false;
  constructor(public categories:CategoryService, public router:Router) { }

  ngOnInit(): void {
    this.categories.getCategories().subscribe(data =>{
      this.categoriesArray = data;
      this.loading = true;
      console.log(data);
    })
  }
  routeToCategories = (name) =>{
    this.router.navigate([`/categories/${name}`])
  }

}
