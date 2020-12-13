import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
public isArrayCategories = ['Software','Hardware','Web development','Python','Django','Laptop','Computer','Digital-Maketing','Sofware','Hardware','Web','Python','Django','Laptop','Computer','Digital','Hardware','Web development','Python','Django'];
public categoriesArray;
  constructor(public categories:CategoryService) { }

  ngOnInit(): void {
    this.categories.getCategories().subscribe(data =>{
      this.categoriesArray = data;
      console.log(data);
    })
  }

}
