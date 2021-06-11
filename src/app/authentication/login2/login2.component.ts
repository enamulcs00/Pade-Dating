import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.scss']

})
export class Login2Component {
	public showPassword: boolean;
   public showPasswordOnPress: boolean;
	submitted = false;
	showLogin = true
	forgotPwd = false
    remember: boolean = false;
	errorMessage: any = "Error";
	flags = {
		isLogin: false,
		isError: false,
	};
constructor(
		private fb: FormBuilder,
		private api: ApiService,
		private router: Router,
		private toastr: ToastrService,
	) {}
	loginForm = this.fb.group({
		email : ['', [Validators.required, Validators.email,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
		password : ['',[Validators.required,Validators.minLength(8)]]
	  })
	  forgotForm = this.fb.group({
		email : ['', [Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
	  })
ngOnInit() {
		if(localStorage.getItem('remember')) {
			this.remember = true
			let formData = JSON.parse(localStorage.getItem('remember'))
			this.loginForm.patchValue({
			email: formData.email,
			password: formData.password,
			})
			
			}
		}
    goToforgotPassword() {
		this.showLogin = !this.showLogin;
		this.forgotPwd = !this.forgotPwd;
	}
	get f() { return this.loginForm.controls; }

	login() {
		this.submitted = true;
		if (this.loginForm.valid) {
			this.flags.isLogin = true;
			this.api.logIn(this.loginForm.value).subscribe((response) => {
				if (response['statusCode'] === 200) {
					if (this.remember) {
						localStorage.setItem('remember', JSON.stringify(this.loginForm.value));
					} else {
						localStorage.clear();
					}
					sessionStorage.setItem("token", response["data"].accessToken);
					sessionStorage.setItem("id", response["data"]._id);
					sessionStorage.setItem("admin", JSON.stringify(response["data"]));
					this.toastr.success("Admin login successfully",'', {
						timeOut: 700,});
					this.router.navigate(['dashboard']);
				} else {
					this.flags.isLogin = false;
					this.flags.isError = true;
					this.toastr.error(response["message"],'', {
						timeOut: 700,});
				}
			});
		} else {
			this.loginForm.markAllAsTouched();
		}
}
ForgotPassword(){
	
	let obj = {
		"email":this.forgotForm.value
	 }
	let url = `forgotPassword`
	if(this.forgotForm.valid){
		this.api.postApi(url,obj).subscribe((res:any)=>{
			if(res.success==true){
				this.toastr.success(res.message)
				this.goToforgotPassword()
			}else{
				this.toastr.error(res.message,'', {
					timeOut: 500,})
			}
})
	}}
}
