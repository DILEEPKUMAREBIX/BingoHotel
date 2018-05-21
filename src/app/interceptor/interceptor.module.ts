import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', 'http://139.59.59.56/guide/register')});
    return next.handle(dupReq);
  }
}
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}
  ]
})
export class InterceptorModule { }
