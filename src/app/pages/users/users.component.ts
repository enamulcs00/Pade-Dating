import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserData } from '../../pages/model/UserData'
import { NgxSpinnerService } from 'src/app/shared/services/spinner.service';

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

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	constructor(
		private modalService: NgbModal,
		private fb: FormBuilder,
		private api: ApiService,
		private router: Router,
		private toastr: ToastrService,
		private spinner: NgxSpinnerService,
	) {

	}
	ngOnInit(): void {
		this.getUsers()
		this.spinner.show();
	}
	ngAfterViewInit() {
		// this.dataSource.paginator = this.paginator;
		// this.dataSource.sort = this.sort;
	}

	getUsers() {
		this.api.users().subscribe(res => {
			if (res['statusCode'] === 200) {
				this.dataSource = new MatTableDataSource<UserData>(res["data"]["data"]);
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

	updateStatus(item, e) {
		if (e.checked) {
			item.status = 'true'
		} else {
			item.status = 'false'
		}
		var data = {
			userId: item._id,
			status: item.status
		};
		// console.log("data: ", data);
		let formData = new FormData();
		formData.append("data", JSON.stringify(data));
		// formData.append("pic", item.profilePic);
		return
		this.api.updateUser(formData).subscribe((res: any) => {
			if (res["response"]["success"]) {
				this.getUsers();
			}
			if (!res["response"]["success"]) return;
		});
	}

	viewUserDetail(item){
		this.router.navigateByUrl("/pages/users_detail/"+item._id);
	}

	unblockUsers(item, status) {
		console.log("item: ", item);
		// if (status.checked) {
		// 	item.status = 'true'
		// } else {
		// 	item.status = 'false'
		// }
		const data = {
			Id: item._id,
			// isActive: status
		};
		console.log("data: ", data);
		this.api.unblockUsers(data).subscribe(response => {
			if (response['statusCode'] === 200) {
				this.toastr.success(response['message']);
				this.getUsers();
			} else {
				this.toastr.error(response['message']);
			}
		});
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
		this.modalService.open(userDelete, { backdropClass: 'light-blue-backdrop', centered: true, size: 'sm' });
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
