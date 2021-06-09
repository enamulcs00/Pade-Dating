import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../shared/services/api.service';
import { environment } from '../../../environments/environment'
import { NgxSpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
	templateUrl: 'profile.component.html'
})

export class ProfileComponent {
	userForm: FormGroup;
	userDetail: any;
	File: any;
	userImage: any;
	submitted: boolean = false;
	id: any;

	constructor(
		private fb: FormBuilder,
		private api: ApiService,
		private router: Router,
		private toastr: ToastrService,
		private spinner: NgxSpinnerService,
	) {
		// this.id = JSON.parse(localStorage.getItem("id"));
	}

	ngOnInit() {
		this.getProfile()
		this.userForm = this.fb.group({
			fullName: new FormControl("", Validators.compose([Validators.required, Validators.minLength(3),
			Validators.maxLength(25), Validators.pattern(/^[a-zA-Z ]*$/i)])),
			// password: new FormControl("", Validators.compose([Validators.required])),
			phoneNo: new FormControl("", [Validators.required, Validators.maxLength(15), Validators.minLength(7),
			Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')]),
			email: new FormControl("", Validators.compose([Validators.required, ,
			Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)])),
		});
	}
	getProfile() {
		this.spinner.show();
		this.api.getProfile().subscribe(res => {
			if (res['statusCode'] === 200) {
				this.userDetail = res["data"];
				this.setValues(this.userDetail);
			} else {
				this.toastr.error(res["message"]);
			}
		}, error => {
			this.spinner.hide();
		})
	}
	async profilePic(event) {
		this.File = event.target.files[0];
		if (event.target.files && event.target.files[0]) {
			var reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			reader.onload = (event: any) => {
				this.userImage = event.target.result;
			};
		}
	}

	setValues = data => {
		if (data) {
			data.image && (this.userImage = data.image);
			this.userForm.patchValue({
				fullName: data.fullName,
				// countryCode: data.countryCode,
				// password: data.password,
				phoneNo: data.phoneNo,
				email: data.email
			});
			if (data.image) {
				this.userImage = environment.imagesUrl + data.image;
			}
		}
	}

	update() {
		this.submitted = true;
		if (this.userForm.valid) {
			var data = this.userForm.value;
			let formData = new FormData();
			formData.append("fullName",data.fullName);
			formData.append("phoneNo", data.phoneNo);
			formData.append("email", data.email);
			if(this.File != undefined)formData.append("file", this.File);
			this.spinner.show();
			this.api.updateProfile(formData).subscribe(res => {
				if (res['statusCode'] === 200) {
					this.router.navigate(['dashboard'])
					this.api.onUpdateUser.next("new data");
					this.toastr.success(res["message"]);
					this.getProfile()
				} else {
					this.toastr.error(res["message"]);
				}
			}, error => {
				this.spinner.hide();
			});
		}
	}
}
