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
	imagePath:any;
	submitted:boolean = false
	isActive:boolean = false
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
	files: any;
	pageSize: any= 10;
    pageIndex :any= 1;
	objId: any;
	minAge: any = 18;
	searchBy: any;
	totalUser:number;
	IsJective:boolean
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
		var today = new Date();
		this.minAge = new Date(today.getFullYear() - this.minAge, today.getMonth(), today.getDate());
	}
	ngOnInit(): void {
		this.getUsers()
	
         this.userForm = this.formBuilder.group({
			firstName: new FormControl("", Validators.compose([Validators.required,
			Validators.maxLength(15),Validators.pattern("^[a-zA-Z ]*$")])),
			lastName: new FormControl("",Validators.compose([Validators.required,
			  Validators.maxLength(15),Validators.pattern("^[a-zA-Z ]*$")])),
			  userName: new FormControl("",Validators.compose([Validators.required,
				Validators.maxLength(15),Validators.pattern(/^[a-zA-Z0-9]+$/)])),
			// countryCode: new FormControl("", Validators.compose([Validators.required])),
			phoneNo: new FormControl("", [Validators.required, Validators.maxLength(15),
			Validators.minLength(7),
			Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')]),
			email: new FormControl("", Validators.compose([Validators.required, ,
			Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)])),
			dateofbirth: new FormControl("",Validators.required),
			address: new FormControl("",Validators.required),
			image: new FormControl("",Validators.required),
			gender: new FormControl('',Validators.required),
		
		  });
		  
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
		let url = `users?limit=${(this.pageSize?(this.pageSize) : '')+(this.pageIndex ? ('&page=' + this.pageIndex) : '')+ (this.searchBy ? ('&search=' + this.searchBy) : '')+ (this.IsJective ? ('&isActive=' + this.IsJective) : '')}`
		this.api.getApi(url).subscribe((res:any) => {
			if (res.statusCode === 200) {
				this.dataSource = new MatTableDataSource<UserData>(res.data.data);
				this.exportLink = res.data.exportLink;
				this.dataSource.paginator = this.paginator;
				this.dataSource.sort = this.sort;
				this.totalUser = res.data.itemCount
				console.log('Total user',this.totalUser,res);
				
			} else {
				this.toastr.error(res["message"]);
				this.totalUser = 0
			}
		})
	}
	pageChange(event) {
		console.log('ev page',event);
		this.pageSize=event.pageSize;
	     this.pageIndex=event.pageIndex;
		 this.getUsers()
	  }
	viewUserDetail(item){
		this.router.navigateByUrl("/pages/users_detail/"+item._id);
	}

	userEditModal(userEdit,data) {
		this.isActive = data.isActive
		this.objId = data._id
		this.files = data.image
		this.imagePath = data.image.split('/').pop()
		this.userForm.controls['firstName'].setValue(data.firstName)
		this.userForm.controls['lastName'].setValue(data.lastName)
		this.userForm.controls['email'].setValue(data.email)
		this.userForm.controls['phoneNo'].setValue(data.phoneNo)
		this.userForm.controls['dateofbirth'].setValue(data.dateofbirth)
		this.userForm.controls['userName'].setValue(data.username)
		this.userForm.controls['address'].setValue(data.address)
		this.userForm.controls['gender'].setValue(data.gender || 'MALE')
		this.userForm.controls['image'].setValue(data.image)
		this.modalService.open(userEdit, { backdropClass: 'light-blue-backdrop', centered: true, size: 'lg' })
		
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
	filterBy(ref){
	this.IsJective = ref
	this.searchBy = null
	this.getUsers()	
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
	timer: number;
  deleteId:any;
  applyFilter(event: any) {
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      let filterValue = (event.target as HTMLInputElement).value;
      this.searchBy=filterValue;
      this.pageIndex=1;
      this.getUsers();
    }, 1000)
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
	sendFile(fileData) {
		let url = `uploadFile`
	   let formdata = new FormData()
		formdata.append('file', fileData);
		this.api.postApi(url,formdata).subscribe((res: any) => {
		  console.log(res.data)
		  if (res.statusCode==200) {
		 this.toastr.success('File updated successfully')
			console.log("upload data res=>>", res.data)
			this.files = res.data.filePath
			
		  } else {
			this.toastr.error(res.message)
		  }
		});
	  }
	  uploadFile(event) {
		if (event.target.files && event.target.files[0]) {
		  var type = event.target.files[0].type;
		  if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
			let fileData = event.target.files[0];
			this.sendFile(fileData)
			 var reader = new FileReader()
			 this.imagePath = fileData.name
		}}}
		UpadteUser()
		{
		  this.submitted = true
		  let url = `users/${this.objId}`
	   let  obj = {
			"firstName":  this.userForm.controls['firstName'].value,
			"lastName":this.userForm.controls['lastName'].value,
			"gender":this.userForm.controls['gender'].value,
			 "address":this.userForm.controls['address'].value,
			"image":this.files,
			"phoneNo":this.userForm.controls['phoneNo'].value,
			"email":this.userForm.controls['email'].value,
			"dateofbirth":this.userForm.controls['dateofbirth'].value,
			"username":this.userForm.controls['userName'].value,
			"isActive":this.isActive,
			}
			if(this.userForm.valid){
			  this.api.putApi(url,obj).subscribe((res:any)=>{
				if(res.statusCode==200){
				  this.submitted = false
				  this.toastr.success(res.message)
				  this.getUsers()
				  this.modalService.dismissAll()
				}else{
				  this.toastr.error(res.message)
				}
			  })
			}
		}
}
