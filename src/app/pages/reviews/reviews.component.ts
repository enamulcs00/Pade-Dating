import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  pageSize: any= 10;
  pageIndex :any= 1;
  active=1;
  closeResult: string;
  totalUser: number;
  searchBy: string;
  Reviews: any;
  Review: any;
  id: any;
  ngOnInit(): void {
    this.getUsers()
  }
  constructor(private modalService: NgbModal,	private api: ApiService,
		private router: Router,
		private toastr: ToastrService,) {}
  reviewModal(review,reviews) {
    this.Review = reviews
    console.log('Rev',reviews);
    
    this.modalService.open(review, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  addreviewModal(addreview) {
    this.modalService.open(addreview, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  reviewDeleteModal(reviewDelete,id) {
    this.id = id
    this.modalService.open(reviewDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  getUsers() {
		let url = `reviews?count=${(this.pageSize?(this.pageSize) : '')+(this.pageIndex ? ('&page=' + this.pageIndex) : '')+ (this.searchBy ? ('&search=' + this.searchBy) : '')}`
		this.api.getApi(url).subscribe((res:any) => {
      console.log('Review api called',res);
      
			if (res.statusCode === 200) {
        this.Reviews = res.data.doc
				this.totalUser = res.data.itemCount
				console.log('Total rev',this.totalUser,res);
			} else {
				this.toastr.error(res["message"]);
				this.totalUser = 0
			}
		})
	}
  pageChange(event) {
    console.log('ev page',event);
    this.pageSize=event.pageSize;
    if(event.pageIndex==0){
      this.pageIndex = 1
    }else{
      this.pageIndex=event.pageIndex;
    }
     this.getUsers()
    }
    timer: number;
    applyFilter(event: any) {
      window.clearTimeout(this.timer);
      this.timer = window.setTimeout(() => {
        let filterValue = (event.target as HTMLInputElement).value;
        this.searchBy=filterValue;
        this.pageIndex=1;
        this.getUsers();
      }, 1000)
    }
    deleteItem(){
      let url = `reviews/${this.id}`
      this.api.deleteApi(url).subscribe((res:any)=>{
        if(res.statusCode==200){
          this.toastr.success(res.message,'',{timeOut:700})
          this.modalService.dismissAll()
          this.getUsers()
        }else{
          this.toastr.error(res.message)
        }
      })
    }
}
