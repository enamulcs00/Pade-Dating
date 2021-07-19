import { ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
	selector: 'app-one-month',
	templateUrl: './one-month.component.html',
	styleUrls: ['./one-month.component.css']
})
export class OneMonthComponent implements OnInit {

	@Input() countries: any;
	addPakageForm: FormGroup;
	submitted: boolean;
	id: any;
	displayedColumns: string[] = [
		'name',
		'countryName',
		'type',
		'price',
		'likes',
		'matches',
		'received',
		'send',
		'read',
		'picture',
		'video',
		'action'
	];
	dataSource = new MatTableDataSource<any>();
	pageSize: any = 10;
	pageIndex: any = 1;
	totalCount: number;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	packageData: any;
	closeResult: string;

	constructor(
		private formBuilder: FormBuilder,
		private modalService: NgbModal,
		public service: ApiService,
		private toast: ToastrService,
		private router: Router,
    	private route: ActivatedRoute,
	) {

	}

	ngOnInit(): void {
		this.addPakageForm = this.formBuilder.group({
			type: [1],
			name: [null, Validators.required],
			countryName: [null, Validators.required],

			price: this.formBuilder.group({
				amount: [null, Validators.required],
				units: [null, Validators.required]
			}),

			likes: this.formBuilder.group({
				type: ['LIMITED', Validators.required],
				count: [0, Validators.required]
			}),

			matches: this.formBuilder.group({
				type: ['LIMITED', Validators.required],
				count: [0, Validators.required]
			}),

			received: this.formBuilder.group({
				type: ['LIMITED', Validators.required],
				count: [0, Validators.required]
			}),

			send: this.formBuilder.group({
				type: ['LIMITED', Validators.required],
				count: [0, Validators.required]
			}),

			read: this.formBuilder.group({
				type: ['LIMITED', Validators.required],
				count: [0, Validators.required]
			}),

			picture: this.formBuilder.group({
				type: ['LIMITED', Validators.required],
				count: [0, Validators.required]
			}),

			video: this.formBuilder.group({
				type: ['LIMITED', Validators.required],
				count: [0, Validators.required]
			}),
		});

		let likes = this.addPakageForm.get('likes') as FormGroup;
		likes.get('type').valueChanges.subscribe(item => {
			if (likes.get('type').value == 'UNLIMITED') {
				likes.get('count').setValue(null)
				likes.get('count').disable();
			} else {
				likes.get('count').enable();

			}
		})

		let matches = this.addPakageForm.get('matches') as FormGroup;
		matches.get('type').valueChanges.subscribe(item => {
			if (matches.get('type').value == 'UNLIMITED') {
				matches.get('count').setValue(null)
				matches.get('count').disable();
			} else {
				matches.get('count').enable();

			}
		})


		let received = this.addPakageForm.get('received') as FormGroup;
		received.get('type').valueChanges.subscribe(item => {
			if (received.get('type').value == 'UNLIMITED') {
				received.get('count').setValue(null)
				received.get('count').disable();
			} else {
				received.get('count').enable();

			}
		})

		let read = this.addPakageForm.get('read') as FormGroup;
		read.get('type').valueChanges.subscribe(item => {
			if (read.get('type').value == 'UNLIMITED') {
				read.get('count').setValue(null)
				read.get('count').disable();
			} else {
				read.get('count').enable();

			}
		})

		let send = this.addPakageForm.get('send') as FormGroup;
		send.get('type').valueChanges.subscribe(item => {
			if (send.get('type').value == 'UNLIMITED') {
				send.get('count').setValue(null)
				send.get('count').disable();
			} else {
				send.get('count').enable();

			}
		})

		let picture = this.addPakageForm.get('picture') as FormGroup;
		picture.get('type').valueChanges.subscribe(item => {
			if (picture.get('type').value == 'UNLIMITED') {
				picture.get('count').setValue(null)
				picture.get('count').disable();

			} else {
				picture.get('count').enable();

			}
		})

		let video = this.addPakageForm.get('video') as FormGroup;
		video.get('type').valueChanges.subscribe(item => {
			console.log("item: ", item)
			if (video.get('type').value == 'UNLIMITED') {
				video.get('count').setValue(null)
				video.get('count').disable();
			} else {
				video.get('count').enable();

			}
		})

		this.getAllPackages()
	}

	onChangeUnit(countryName) {
		let value = this.addPakageForm.get('countryName').value;
		if (value != null && value != '') {
			value = value.toLowerCase();
			let country = this.countries.find(x => x.countryNameEn.toLowerCase() == value);
			if (country != undefined) {
				let price = this.addPakageForm.get('price') as FormGroup;
				price.get('units').setValue(country.currencySymbol);
			}
		}
	}

	addSubscriptionModal(addSubscription, row=null) {
		if(row != null) {
			this.id = row?._id
		} else {
			this.id = null;
		}
		console.log("row ", row)
		// setValues = data => {
			if (row && this.addPakageForm) {
				this.addPakageForm.patchValue({
					name : row.name,
					countryName : row.countryName,
					type : row.type,
					price : {
						amount:row.price.amount,
						units : row.price.units
					},
					likes : {
						type : row.likes.type,
						count : row.likes.count
					},
					matches : {
						type : row.matches.type,
						count : row.matches.count
					},
					received : {
						type : row.received.type,
						count : row.received.count
					},
					read : {
						type : row.read.type,
						count : row.read.count
					},
					send : {
						type : row.send.type,
						count : row.send.count
					},
					picture : {
						type : row.picture.type,
						count : row.picture.count
					},
					video : {
						type:row.video.type,
						count : row.video.count
					},
				})
		}
		this.modalService.open(addSubscription, { backdropClass: 'light-blue-backdrop', centered: true, size: 'lg' });
	}
	delSubscriptionModal(delSubscription) {
		this.modalService.open(delSubscription, { backdropClass: 'light-blue-backdrop', centered: true, size: 'sm' });
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

	deletePackage(delSubscription, list) {
		// const message = 'Are you sure you want to delete ' + list.firstName + ' ' + list.lastName + ' ?';
		console.log(delSubscription, list);
		
		this.modalService.open(delSubscription,  { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'sm' }).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
			console.log("this.closeResult:", this.closeResult);
			
			if (result) {
				const data = {
				  id: list._id,
				};
				this.service.deletePackage(list._id).subscribe(response => {
				  if (response['statusCode'] === 200) {
					this.toast.success(response['message']);
					this.getAllPackages();
				  } else {
					this.toast.error(response['message']);
				  }
				});
			  }
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	getAllPackages() {
		this.service.getAllPackages(this.pageIndex, this.pageSize).subscribe((res: any) => {
			if (res.statusCode === 200) {
				console.log("res", res)
				this.dataSource = new MatTableDataSource<any>(res.data.doc);
				console.log("DataSource", this.dataSource)
				this.dataSource.paginator = this.paginator;
				this.dataSource.sort = this.sort;
				this.totalCount = res.data.itemCount;
			} else {
				this.totalCount = 0

			}
		})
	}

	pageChange(event) {
		console.log('ev page', event);
		this.pageSize = event.pageSize;
		this.pageIndex = event.pageIndex;
		this.getAllPackages()
	}

	submit() {
		if (this.addPakageForm.valid) {
			let data = JSON.parse(JSON.stringify(this.addPakageForm.value));
			this.service.packages(data).subscribe((res: any) => {
				if (res.statusCode == 200) {
					this.toast.success(res.message, '', { timeOut: 900 })
					this.modalService.dismissAll()
					this.getAllPackages()
					this.cancelBtn();
				} else {
					this.toast.error(res.message)
				}
			}, error => {
				this.toast.error(error)
				// this.isLoading = false;
			})
		} else {
			this.addPakageForm.markAllAsTouched();
		}
	}

	update() {
		if (this.addPakageForm.valid) {
			let data = JSON.parse(JSON.stringify(this.addPakageForm.value));
			this.service.updatePackage(this.id, data).subscribe((res: any) => {
				if (res.statusCode == 200) {
					this.toast.success(res.message, '', { timeOut: 900 })
					this.modalService.dismissAll()
					this.getAllPackages()

				} else {
					this.toast.error(res.message)
				}
			}, error => {
				this.toast.error(error)
			})
		} else {
			this.addPakageForm.markAllAsTouched();
		}
	}

	cancelBtn(){
		this.addPakageForm.controls.type.setValue(1);
		this.addPakageForm.controls.name.setValue('');
		this.addPakageForm.controls.countryName.setValue('');

		let price = this.addPakageForm.get('price') as FormGroup;
		price.controls.amount.setValue(null);
		price.controls.units.setValue('')

		let likes = this.addPakageForm.get('likes') as FormGroup;
		likes.controls.type.setValue('LIMITED');
		likes.controls.count.setValue(null)

		let matches = this.addPakageForm.get('matches') as FormGroup;
		matches.controls.type.setValue('LIMITED');
		matches.controls.count.setValue(null)

		let received = this.addPakageForm.get('received') as FormGroup;
		received.controls.type.setValue('LIMITED');
		received.controls.count.setValue(null)

		let read = this.addPakageForm.get('read') as FormGroup;
		read.controls.type.setValue('LIMITED');
		read.controls.count.setValue(null)

		let send = this.addPakageForm.get('send') as FormGroup;
		send.controls.type.setValue('LIMITED');
		send.controls.count.setValue(null)

		let picture = this.addPakageForm.get('picture') as FormGroup;
		picture.controls.type.setValue('LIMITED');
		picture.controls.count.setValue(null)

		let video = this.addPakageForm.get('video') as FormGroup;
		video.controls.type.setValue('LIMITED');
		video.controls.count.setValue(null)

		setTimeout(() => {
			this.addPakageForm.markAsUntouched();
			this.addPakageForm.markAsPristine();
		}, 1000);
	}
}
