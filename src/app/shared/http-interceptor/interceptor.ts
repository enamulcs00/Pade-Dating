import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  token:any;
  constructor(private spinner:NgxSpinnerService,private service:ApiService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     //console.log("hi");
    this.token=sessionStorage.getItem('token');
 
    this.spinner.show();
    //console.log(this.token);
    let tokenizedReq=req.clone({
      setHeaders:{
        authorization:`${this.token}`
      }
 })
    return next.handle(tokenizedReq).pipe(finalize( ()=>
    this.spinner.hide()

   ));

}

}