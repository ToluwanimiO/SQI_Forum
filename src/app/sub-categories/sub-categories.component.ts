import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {
  public topicsArray = [

    {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'hacks', upvote:'200',date:'19-4-2019',views:28},
    {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'software', upvote:'200',date:'19-4-2019',views:28},
    {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'soft', upvote:'200',date:'19-4-2019',views:28},
    {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'hacks', upvote:'200',date:'19-4-2019',views:28},
    {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'software', upvote:'200',date:'19-4-2019',views:28},
    {topic:'Lorem ipsum dolor sit aconsectetur adipisicing', categories:'soft', upvote:'200',date:'19-4-2019',views:28},
    ];
public categories=['Tech','football','ICT','WebPrograming','Software','Tech','football','ICT','WebPrograming','Software','Tech','football','ICT','WebPrograming','Software']
  constructor() { }

  ngOnInit(): void {
  }

}
