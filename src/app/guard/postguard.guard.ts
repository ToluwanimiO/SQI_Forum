import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from '../services/category.service';

@Injectable({
  providedIn: 'root'
})
export class PostguardGuard implements CanActivate {
  constructor(public router:Router, public posts : CategoryService, public actRoute:ActivatedRoute){}
  public cond = false
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.posts.getPosts().subscribe(data=>{
      let getPost = data.filter(each=>each.slug == this.actRoute.snapshot.params.slug);
      if(getPost.length < 1){
        this.router.navigate['/home']
      } else{
        this.cond = true
      }
    })
    return true;
  }
  
}
