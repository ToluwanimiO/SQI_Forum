import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserguardGuard implements CanActivate {
  constructor(public router:Router, public getUser:UsersService){}
  public cond = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.Token == null){
        this.router.navigate['/signin']
      }else{
        this.cond = true
      }
      // this.posts.getCategories().subscribe(data=>{
      //   let getCategories = data.filter(each=>each.name == this.actRoute.snapshot.params.name);
      //   if(data.length < 1 || getCategories.length < 1){
      //     this.router.navigate['/home']
      //   } else{
      //     this.cond = true
      //   }
      // })
    return this.cond;
  }
  
}
