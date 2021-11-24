import { Injectable } from '@angular/core';

import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(req.headers)
    const modifiedRequest = req.clone({headers:req.headers.append("Auth","xyz")})
    console.log(modifiedRequest.headers);
    return next.handle(modifiedRequest).pipe(tap(event => {
      if(event.type === HttpEventType.Response) {
        console.log("Response Arrived");
      }
    }));
  }


}