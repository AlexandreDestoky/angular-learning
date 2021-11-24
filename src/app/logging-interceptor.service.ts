import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Logging Lancé");
    console.log(req.url)
    return next.handle(req).pipe(tap(event => {
      if(event.type === HttpEventType.Response) {
        console.log("incoming response");
        console.log(event.body)
      }
    }));
  }
}