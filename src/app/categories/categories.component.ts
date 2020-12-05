import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
public isArrayCategories = ['Sofware','Hardware','Web development','Python','Django','Laptop','Computer','Digital-Maketing','Sofware','Hardware','Web','Python','Django','Laptop','Computer','Digital'];
  constructor() { }

  ngOnInit(): void {
  }

}
