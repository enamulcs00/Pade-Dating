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
		if (localStorage.getItem("remember")) {
			let data = JSON.parse(localStorage.getItem("remember"));
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
		// if (sessionStorage.getItem("token")) {
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
				localStorage.setItem('remember', JSON.stringify(this.loginForm.value));
			} else {
				localStorage.clear();
			}
			this.flags.isLogin = true;
			this.api.logIn(this.loginForm.value).subscribe((response) => {
				if (response['statusCode'] === 200) {
					sessionStorage.setItem("token", response["data"].accessToken);
					sessionStorage.setItem("id", response["data"]._id);
					sessionStorage.setItem("admin", JSON.stringify(response["data"]));
					// sessionStorage.setItem("role", JSON.stringify(response["data"].role));
					this.toastr.success("Admin login successfully");
					this.router.navigate(['dashboard']);
					// if (response["data"].role == "SubAdmin") {
					//   sessionStorage.setItem("access", JSON.stringify(response["data"].access));
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
