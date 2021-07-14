import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private accountService: ApiService,private toastr:ToastrService,private modalService: NgbModal) {}
 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError(err => {
        console.log('err Intercep',err);
        
          if ([401, 403].includes(err.status)) {
             this.toastr.error('Session has been expired','Please login',{
                timeOut: 1200,
              })
              this.modalService.dismissAll()
              this.accountService.logout();
          }
 const error = err.error?.message || err.statusText;
         if (![401, 403,200].includes(err.status)) {
           console.log('If not 200 inter cal',err,error);
           if(err.status==0){
            this.accountService.logout();
           }
            this.toastr.error(error,'',{
               timeOut: 1000,
             })
         }
          return throwError(error);
      }))
  }
}
