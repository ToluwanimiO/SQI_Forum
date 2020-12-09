import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostserviceService } from '../postservice.service';

@Component({
  selector: 'app-postcontent',
  templateUrl: './postcontent.component.html',
  styleUrls: ['./postcontent.component.css']
})
export class PostcontentComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute, public postService:PostserviceService) { }
  public postDetail;
  ngOnInit(): void {
    let slug = this.actRoute.snapshot.params.slug
    let id = this.actRoute.snapshot.params.id
    this.postService.retrieveListDetail(slug,id).subscribe(data=>{
      this.postDetail = data;
      console.log(data)
    })
  }

}
