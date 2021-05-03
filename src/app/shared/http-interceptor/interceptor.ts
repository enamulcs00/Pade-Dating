import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clonedReq = this.handleRequest(request);
    // this.common.showSpinner();
    return next.handle(clonedReq);
  }
  handleRequest(request: HttpRequest<any>) {
    const token = sessionStorage.getItem("token");
    let authReq;
    authReq = request.clone({
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        authorization: token ? 'Bearer'+ ' '+token : ""
      })
    });
    if (
      (request.method.toLowerCase() == "post" ||
        request.method.toLowerCase() == "put") &&
      request.body instanceof FormData
    ) {
      authReq = request.clone({
        headers: new HttpHeaders({
          authorization: token ? 'Bearer'+ ' '+token : ""
        })
      });
    }
    return authReq;
  }

    //     // add authorization header with jwt token if available
    //     let Token = sessionStorage.getItem('token');
    //     let headers = {
    //     }
    //     if (Token) {
    //         headers['x-jwt-token'] = `Bearer ${Token}`;
    //     }
    //     request = request.clone({
    //         setHeaders: headers
    //     });
    //     return next.handle(request);
    // }
}