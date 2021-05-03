import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toaster : ToastrService, private router : Router, private _mat : MatDialog) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if(['token_not_provided','token_invalid','token_expired'].indexOf(err.error.error) >=0) {
                sessionStorage.removeItem("admin");
                sessionStorage.removeItem("token");
                this.router.navigate(['/login']);
                if(this._mat.openDialogs) {
                    this._mat.closeAll();
                }
             } else if(err.error.msg != undefined) {
                this.toaster.error(err.error.msg, 'Oops!');
            } else if(err.error.error != undefined) {
                this.toaster.error(err.error.error, 'Oops!');
            } else {
                if(typeof err.error == 'string') {
                    this.toaster.error(err.error, 'Oops!');
                }
            }
            const error = err.error.error_description || err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
