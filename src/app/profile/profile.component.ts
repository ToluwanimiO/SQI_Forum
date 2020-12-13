import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public user:CategoryService, public actRoute:ActivatedRoute, public router:Router) { }
  public userProfile;
  public userPost;
  ngOnInit(): void {
    let id = this.actRoute.snapshot.params.id
    this.user.getProfile(id).subscribe(data =>{
      this.userProfile = data
    });
    this.user.getPosts().subscribe(data =>{
      let post = data.filter((each, i)=>each.author.id == id);
      this.userPost = post
      console.log(post)
    });
  }
  viewPostDetails = (slug, id) =>{
    this.router.navigate([`/postcontent/${slug}/${id}`])
  }

}
