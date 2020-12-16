import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor( public router: Router) { }
  // canActivate() : boolean {
  //   if (!this.authService:isAuthenticated()) {
  //     this.router.navigate(['sign-in']);
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  public setToken(token: string): void {
      localStorage.setItem('token', token);
      }

  public getToken() : String {
    return localStorage.getItem('token');
  }
}
