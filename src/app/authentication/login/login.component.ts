import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../shared/services/api.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent {
	submitted = false;
	showLogin = true
	forgotPwd = false
	loginForm: FormGroup;
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
	) {
		if (sessionStorage.getItem("remember")) {
			let data = JSON.parse(sessionStorage.getItem("remember"));
			this.remember = true;
			this.loginForm = this.fb.group({
				email: [data.email, [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
				password: [data.password, [Validators.required, Validators.minLength(8)]]
			});
		} else {
			this.loginForm = this.fb.group({
				email: ["", [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
				password: ["", [Validators.required, Validators.minLength(8)]]
			});
		}
	}

	ngOnInit() {
		// if (localStorage.getItem("token")) {
		//   this.router.navigateByUrl("/dashboard");
		// }
	}

	goToforgotPassword() {
		this.showLogin = !this.showLogin;
		this.forgotPwd = !this.forgotPwd;
	}
	get f() { return this.loginForm.controls; }

	login() {
		this.submitted = true;
		if (this.loginForm.valid) {
			if (this.remember) {
				sessionStorage.setItem('remember', JSON.stringify(this.loginForm.value));
			} else {
				sessionStorage.clear();
			}
			this.flags.isLogin = true;
			this.api.logIn(this.loginForm.value).subscribe((response) => {
				if (response['statusCode'] === 200) {
					localStorage.setItem("token", response["data"].authToken);
					localStorage.setItem("id", response["data"]._id);
					localStorage.setItem("admin", JSON.stringify(response["data"]));
					// localStorage.setItem("role", JSON.stringify(response["data"].role));
					this.toastr.success(response['message']);
					this.router.navigate(['dashboard']);
					// if (response["data"].role == "SubAdmin") {
					//   localStorage.setItem("access", JSON.stringify(response["data"].access));
					// }
					// this.router.navigateByUrl("/dashboard");
				} else {
					this.flags.isLogin = false;
					this.flags.isError = true;
					this.toastr.error(response["message"]);
				}
			});
		} else {
			this.loginForm.markAllAsTouched();
		}

	}
}
