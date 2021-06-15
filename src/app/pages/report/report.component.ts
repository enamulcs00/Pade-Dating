import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  active=1;
  closeResult: string;
  pageSize: any= 10;
  pageIndex :any= 1;
  totalUser: number;
  searchBy: string;
  Reports: any;
  
  id: any;
  ngOnInit(): void {
    this.getUsers()
  }
  constructor(private modalService: NgbModal,public service:ApiService,private toastr:ToastrService) {}
  reviewModal(review) {
    this.modalService.open(review, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  addreviewModal(addreview) {
    this.modalService.open(addreview, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  reviewDeleteModal(reviewDelete) {
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
		let url = `reports?count=${(this.pageSize?(this.pageSize) : '')+(this.pageIndex ? ('&page=' + this.pageIndex) : '')+ (this.searchBy ? ('&search=' + this.searchBy) : '')}`
		this.service.getApi(url).subscribe((res:any) => {
      console.log('Review api called',res);
      
			if (res.statusCode === 200) {
        this.Reports = res.data.doc
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
      let url = `reports/${this.id}`
      this.service.deleteApi(url).subscribe((res:any)=>{
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
