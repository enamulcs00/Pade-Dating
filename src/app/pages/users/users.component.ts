import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserData } from '../../pages/model/UserData'
import { NgxSpinnerService } from 'src/app/shared/services/spinner.service';
import { CommonService } from 'src/app/shared/services/common.service'
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
	closeResult: string;
	userForm: FormGroup;
	allUsers: UserData[];
	displayedColumns: string[] = [
		'name',
		'email',
		'contact',
		'username',
		'dateofbirth',
		'gender',
		'address',
		'status',
		'action'
	];
	dataSource = new MatTableDataSource<UserData>();
	exportLink: any = ''

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	userDetail: any;
	userImage: any;
	File: any;

	constructor(
		private modalService: NgbModal,
		private fb: FormBuilder,
		private formBuilder: FormBuilder,
		private api: ApiService,
		private router: Router,
		private toastr: ToastrService,
		private spinner: NgxSpinnerService,
		public comm: CommonService,
	) {

	}
	ngOnInit(): void {
		this.getUsers()
		this.spinner.show();

		this.userForm = this.formBuilder.group({
			firstName: new FormControl("", Validators.compose([Validators.required, Validators.minLength(2),
			Validators.maxLength(18),Validators.pattern("^[a-zA-Z ]*$")])),
			lastName: new FormControl("",Validators.compose([Validators.required, Validators.minLength(2),
			  Validators.maxLength(16),Validators.pattern("^[a-zA-Z ]*$")])),
			username: new FormControl("",Validators.compose([Validators.required, Validators.minLength(2),
				Validators.maxLength(16),Validators.pattern("^[a-zA-Z ]*$")])),
			// countryCode: new FormControl("", Validators.compose([Validators.required])),
			phoneNo: new FormControl("", [Validators.required, Validators.maxLength(15),
			Validators.minLength(7),
			Validators.pattern("^[0-9]*$")]),
			email: new FormControl("", Validators.compose([Validators.required, ,
			Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
			dateofbirth: new FormControl("",),
			city: new FormControl("",),
			// country: new FormControl("", Validators.compose([Validators.required])),
			address: new FormControl("",),
		  });
	}
	ngAfterViewInit() {
		// this.dataSource.paginator = this.paginator;
		// this.dataSource.sort = this.sort;
	}

	// getUserById(){
	// 	this.api.users().subscribe(res => {
	// 		if (res['statusCode'] === 200) {
	// 			this.userDetail = res["data"];
	// 			this.setValues(this.userDetail);
	// 		} else {
	// 			this.toastr.error(res["message"]);
	// 		}
	// 	}, error => {
	// 		this.toastr.error('Something went wrong, please try again!', 'Oops!', { timeOut: 3000, closeButton: true });
	// 		console.log(error)
	// 	})	
	// }

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
		  this.userForm.patchValue({
			firstName: data.firstName,
			lastName: data.lastName,
			// countryCode: data.countryCode,
			username: data.username,
			phoneNo: data.phoneNo,
			email: data.email,
			dateofbirth: data.dateofbirth,
			city: data.city,
			address: data.address,
		  });
		//   if (data && data.emergencyPhone) {
		// 	this.userForm.controls.emergencyPhone.patchValue({
		// 	  phone: data.emergencyPhone.phone,
		// 	  countryCode: data.emergencyPhone.countryCode
		// 	})
		//   }
		  if (data.image) {
			this.userImage = environment.imagesUrl + data.image;
		  }
		}
	  };

	getUsers() {
		this.api.users().subscribe(res => {
			if (res['statusCode'] === 200) {
				this.dataSource = new MatTableDataSource<UserData>(res["data"]["data"]);
				this.exportLink = res["data"]["exportLink"];
				this.dataSource.paginator = this.paginator;
				this.dataSource.sort = this.sort;
			} else {
				this.toastr.error(res["message"]);
			}
		}, error => {
			this.toastr.error('Something went wrong, please try again!', 'Oops!', { timeOut: 3000, closeButton: true });
			console.log(error)
		})
	}

	viewUserDetail(item){
		this.router.navigateByUrl("/pages/users_detail/"+item._id);
	}

	userEditModal(userEdit,data) {
		console.log(data);
		this.modalService.open(userEdit, { backdropClass: 'light-blue-backdrop', centered: true, size: 'lg' })
		// onSubmit() {
		// 	this.modalService.dismissAll();
		// 	var data = this.userForm.value;
		// 		data['id'] = data._id
		// 		let formData = new FormData();
		// 		formData.append("data", JSON.stringify(data));
		// 		formData.append("pic", this.File);
		// 		this.api.updateUser(data).subscribe(response => {
		// 		  if (response['statusCode'] === 200) {
		// 			this.toastr.success(response['message']);
		// 			this.getUsers();
		// 		  } else {
		// 			this.toastr.error(response['message']);
		// 		  }
		// 		});
		// 	// console.log("res:", this.editProfileForm.getRawValue());
		// }
		.result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
			this.userForm.patchValue({
				firstName: data.firstName,
				lastName: data.lastName,
				// countryCode: data.countryCode,
				username: data.username,
				phoneNo: data.phoneNo,
				email: data.email,
				dateofbirth: data.dateofbirth,
				city: data.city,
				address: data.address,
		});
		if (data.image) {
			this.userImage = environment.imagesUrl + data.image;
		  }
			if (result) {
				var data = this.userForm.value;
				data['id'] = data._id
				let formData = new FormData();
				formData.append("data", JSON.stringify(data));
				formData.append("pic", this.File);
				this.api.updateUser(data).subscribe(response => {
				  if (response['statusCode'] === 200) {
					this.toastr.success(response['message']);
					this.getUsers();
				  } else {
					this.toastr.error(response['message']);
				  }
				});
			  }
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	blockUsers(item, status) {
		console.log("item: ", item);
		if (status.checked) {
			item.status = true
		} else {
			item.status = false
		}
		const data = {
			// id: item._id,
			isBlocked: status
		};
		this.api.blockUsers(item._id, data).subscribe(response => {
			if (response['statusCode'] === 200) {
				this.toastr.success(response['message']);
				this.getUsers();
			} else {
				this.toastr.error(response['message']);
			}
		});
	}

	deleteUser(userModal,list) {
		// const message = 'Are you sure you want to delete ' + list.firstName + ' ' + list.lastName + ' ?';
		this.modalService.open(userModal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'sm' }).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
			if (result) {
				const data = {
				  id: list._id,
				};
				this.api.deleteUser(list._id).subscribe(response => {
				  if (response['statusCode'] === 200) {
					this.toastr.success(response['message']);
					this.getUsers();
				  } else {
					this.toastr.error(response['message']);
				  }
				});
			  }
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	openLink() {
		window.open(this.exportLink)
	}


	discountModal(discount) {
		this.modalService.open(discount, { backdropClass: 'light-blue-backdrop', centered: true, size: 'lg' });
	}
	table = [
		{
			name: 'Sandy',
			// id: "#sand334553",
			contact: "+91-33434343",
			email: "sand@example.com",
			username: "Sandy43",
			dob: "15-09-1991",
			gender: "Male",
			address: "#454 1st Block, Rammurthy, Bangalore-560016",
			completedOrders: "50",
			cancelledOrders: "0",
			paymentnotcomplete: "0",
			pendingOrders: "0",
			totalOrders: "50",
			status: "",
			action: "1",
		},
		{
			name: 'Rohan',
			// id: "#rohan334553",
			contact: "+91-33434343",
			email: "sand@example.com",
			username: "Rohan43",
			dob: "15-09-1991",
			gender: "Male",
			address: "#454 1st Block, Rammurthy, Bangalore-560016",
			completedOrders: "10",
			cancelledOrders: "0",
			paymentnotcomplete: "0",
			pendingOrders: "30",
			totalOrders: "40",
			status: "",
			action: "1",
		},
		{
			name: 'john',
			// id: "#rohan334553",
			contact: "+91-33434343",
			email: "sand@example.com",
			username: "John54",
			dob: "15-09-1991",
			gender: "Male",
			address: "#454 1st Block, Rammurthy, Bangalore-560016",
			completedOrders: "20",
			cancelledOrders: "10",
			paymentnotcomplete: "0",
			pendingOrders: "10",
			totalOrders: "30",
			status: "",
			action: "1",
		},

	]
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
	// This is for the first modal
	open1(content1) {
		this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}
	openWindowCustomClass(content3) {
		this.modalService.open(content3, { backdropClass: 'light-blue-backdrop', centered: true, size: 'lg' });
	}
	userprofileModal(userDelete) {
		this.modalService.open(userDelete, { backdropClass: 'light-blue-backdrop', centered: true, size: 'lg' });
	}
	userDeleteModal(userDelete) {
		this.modalService.open(userDelete, { backdropClass: 'light-blue-backdrop', centered: true, size: 'sm' }).result.then(x=>{
			alert(x);
		});
	}
	userDetailModal(userDetail) {
		this.modalService.open(userDetail, { backdropClass: 'light-blue-backdrop', centered: true, size: 'lg' });
	}
	addUserModal(addUser) {
		this.modalService.open(addUser, { backdropClass: 'light-blue-backdrop', centered: true, size: 'lg' });
	}
	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
