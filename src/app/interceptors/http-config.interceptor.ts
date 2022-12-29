import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(localStorage.getItem("Token")!=null){
      const API_KEY = JSON.parse(localStorage.getItem("Token"));
      return next.handle(request.clone({
        headers: request.headers.set('Authorization',`Token ${API_KEY}`)
        .set('Access-Control-Allow-Origin', '*')
      }));
    }
    return next.handle(request);
    
  }
}
