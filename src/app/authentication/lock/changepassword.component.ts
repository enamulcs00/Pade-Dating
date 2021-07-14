import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';
import {CustomValidationService} from 'src/app/shared/services/custom-validation.service'
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html'
})
export class changepasswordComponent implements OnInit{
  history = window.history;
  changepassForm:FormGroup;
  public showPassword: boolean;
  public showNewPassword: boolean;
  public showCnfPassword: boolean;
  constructor(private fb:FormBuilder,private apiservice:ApiService,private router:Router,private toaster:ToastrService,private customvalidator:CustomValidationService) 
  {}
  ngOnInit()
  {
    this.changepassForm=this.fb.group({
      "oldPassword":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      "newPassword":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      "retypepassword":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    },{
     validator:this.customvalidator.passwordMatchValidator("newPassword","retypepassword")
    });
  }
  changepass()
  {
    let url = `changePassword`
   let datapass=this.changepassForm.value;
   delete datapass.retypepassword;
   console.log(datapass);
   this.apiservice.postApi(url,datapass).subscribe((res:any)=>{
     console.log(res);
     if(res.success==true)
     {
      this.toaster.success(res.message,'Change Password');
      this.router.navigate(['dashboard']);
     }
     
   })
  }
}
