import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    let token = localStorage.getItem("accessToken");
    // console.log(token);
    if (token) {
      request = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${token}`)
      });
    }
    // console.log(request);
    return next.handle(request);
  }
}


