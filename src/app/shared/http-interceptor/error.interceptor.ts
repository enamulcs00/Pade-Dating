import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private accountService: ApiService,private toastr:ToastrService) {}
 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError(err => {
          if ([401, 403].includes(err.status)) {
             this.toastr.error('Session has been expired','Please login',{
                timeOut: 1200,
              })
              this.accountService.logout();
          }
 const error = err.error?.message || err.statusText;
         if (![401, 403,200].includes(err.status)) {
            this.toastr.error(error,'',{
               timeOut: 1000,
             })
         }
          return throwError(error);
      }))
  }
}
