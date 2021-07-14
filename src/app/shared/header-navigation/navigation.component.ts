import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbPanelChangeEvent, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';
declare var $: any;

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {

	public config: PerfectScrollbarConfigInterface = {};

	public showSearch = false;
	public element1: any;
	userDetail: any;
	userImage: any;
	constructor(
		private modalService: NgbModal,
		private router: Router,
		private api: ApiService,
		private route: ActivatedRoute,
		private toastr: ToastrService,
	) { 
		// let data = JSON.parse(sessionStorage.getItem("admin"));
	}

	ngOnInit(){
		this.getProfile()
		// this.api.currentMessage.subscribe((res:any)=>{
		// 	console.log(res);
		// })
		this.api.onUpdateUser.subscribe((res:any)=>{
			this.getProfile()
		})
	}

	// This is for Notifications
	notifications: Object[] = [
		{
			btn: 'btn-danger',
			icon: 'ti-link',
			title: 'Luanch Admin',
			subject: 'Just see the my new admin!',
			time: '9:30 AM'
		},
		{
			btn: 'btn-success',
			icon: 'ti-calendar',
			title: 'Event today',
			subject: 'Just a reminder that you have event',
			time: '9:10 AM'
		},
		{
			btn: 'btn-info',
			icon: 'ti-settings',
			title: 'Settings',
			subject: 'You can customize this template as you want',
			time: '9:08 AM'
		},
		{
			btn: 'btn-primary',
			icon: 'ti-user',
			title: 'Pavan kumar',
			subject: 'Just see the my admin!',
			time: '9:00 AM'
		}
	];

	// This is for Mymessages
	mymessages: Object[] = [
		{
			useravatar: 'assets/images/users/1.jpg',
			status: 'online',
			from: 'Pavan kumar',
			subject: 'Just see the my admin!',
			time: '9:30 AM'
		},
		{
			useravatar: 'assets/images/users/2.jpg',
			status: 'busy',
			from: 'Sonu Nigam',
			subject: 'I have sung a song! See you at',
			time: '9:10 AM'
		},
		{
			useravatar: 'assets/images/users/2.jpg',
			status: 'away',
			from: 'Arijit Sinh',
			subject: 'I am a singer!',
			time: '9:08 AM'
		},
		{
			useravatar: 'assets/images/users/4.jpg',
			status: 'offline',
			from: 'Pavan kumar',
			subject: 'Just see the my admin!',
			time: '9:00 AM'
		}
	];
	addBikeModal(addBike) {
		this.modalService.open(addBike, { backdropClass: 'light-blue-backdrop', centered: true, size: 'lg', backdrop: "static" });
	}

	ngAfterViewInit() { }
	openBox() {
		let element = document.getElementById("notification");
		element.classList.toggle("sidebar_slide");

	}
	closeBox() {
		let element1 = document.getElementById("arrow-close").parentElement;
		element1.classList.remove("sidebar_slide");
	}
	getProfile(){
		this.api.getProfile().subscribe(res => {
			if(res['statusCode'] === 200){
				this.userDetail = res["data"];
				if (this.userDetail.image) {
					this.userImage = environment.imagesUrl + this.userDetail.image;
				}
			}
		})
	}

	logout() {
	         	sessionStorage.clear();
				sessionStorage.removeItem('admin');
				this.toastr.success('You have been successfully logged out!');
				this.router.navigate(['/login']);
	}
}
