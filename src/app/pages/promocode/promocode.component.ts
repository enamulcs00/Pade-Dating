import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';
@Component({
  selector: 'app-promocode',
  templateUrl: './promocode.component.html',
  styleUrls: ['./promocode.component.css']
})
export class PromocodeComponent implements OnInit {
submitted:boolean = false
  closeResult: string;
  timer: number;
  pageSize: any= 10;
    pageIndex :any= 1;
	objId: any;
	minAge: any = 18;
	searchBy: any;
	totalUser:number;
  status: string= 'active';
  giftList: any;
  giftForm:FormGroup
  gitfId: any;
  constructor(private fb:FormBuilder,private modalService: NgbModal,public service:ApiService,private toast:ToastrService) {
this.giftForm  = this.fb.group({
  cardName: new FormControl("", Validators.compose([Validators.required,
  Validators.maxLength(15),Validators.pattern("^[a-zA-Z ]*$")])),
  cost: new FormControl("",Validators.compose([Validators.required,
    Validators.maxLength(10)])),
    cardsBought: new FormControl("",Validators.compose([Validators.required,Validators.maxLength(5)])),
    validFrom: new FormControl('', [Validators.required]),
    validTill:new FormControl ('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.getUsers()
  }
// This is for the first modal
open1(content1) {
  this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
openWindowCustomClass(content3) {
  this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userprofileModal(userDelete) {
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userDeleteModal(userDelete,id) {
  this.gitfId = id
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
userDetailModal(userDetail,item) {
  this.gitfId = item._id
  this.giftForm.patchValue(item)
  this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
addUserModal(addUser) {
  this.submitted = false
  this.giftForm.reset()
  this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
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
public minValue(){
  return this.giftForm.value.validFrom

}
public maxValue(){
return this.giftForm.value.validTill
}
filterBy(ref){
	this.status = ref
	this.searchBy = null
	this.getUsers()	
	}
applyFilter(event: any) {
  console.log('apply fil call',(event.target as HTMLInputElement).value);
  window.clearTimeout(this.timer);
  this.timer = window.setTimeout(() => {
    let filterValue = (event.target as HTMLInputElement).value;
    this.searchBy=filterValue;
    this.pageIndex=1;
    this.getUsers();
  }, 1000)
}
getUsers() {
  let url = `giftCards?count=${(this.pageSize?(this.pageSize) : '')+(this.pageIndex ? ('&page=' + this.pageIndex) : '')+ (this.searchBy ? ('&search=' + this.searchBy) : '')+ (this.status ? ('&status=' + this.status) : '')}`
  this.service.getApi(url).subscribe((res:any) => {
    if (res.statusCode === 200) {
     console.log('FGift',res);
     this.giftList = res.data.doc
      this.totalUser = res.data.itemCount
      console.log('Total user',this.totalUser,res);
    } else {
      this.toast.error(res["message"]);
      this.totalUser = 0
    }
  })
}
addCard()
{
  
  this.submitted = true
  let url = `giftCards`
  if(this.giftForm.valid && this.giftForm.controls['cost'].value.toString().length !=11 && this.giftForm.controls['cardsBought'].value.toString().length !=6){
    this.service.postApi(url,this.giftForm.value).subscribe((res:any)=>{
    if(res.statusCode==200){
      this.getUsers()
      this.submitted = false
      this.toast.success('Gift card added successfully')
      this.modalService.dismissAll()
      this.giftForm.reset()
    }else{
      this.toast.error(res.message)
    }
    })
  }
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
UpdateCard(){
  
  this.submitted = true
  let url = `giftCards/${this.gitfId}`
  if(this.giftForm.valid && this.giftForm.controls['cost'].value.toString().length !=11 && this.giftForm.controls['cardsBought'].value.toString().length !=6){
    this.service.putApi(url,this.giftForm.value).subscribe((res:any)=>{
    if(res.statusCode==200){
      this.getUsers()
      this.submitted = false
      this.toast.success('Gift card updated successfully')
      this.modalService.dismissAll()
      this.giftForm.reset()
    }else{
      this.toast.error(res.message)
    }
    })
  }
}
DeleteCard(){
  
  let url = `giftCards/${this.gitfId}`
  
    this.service.deleteApi(url).subscribe((res:any)=>{
    if(res.statusCode==200){
      this.getUsers()
      this.submitted = false
      this.toast.success('Gift card deleted successfully')
      this.modalService.dismissAll()
      
    }else{
      this.toast.error(res.message)
    }
    })
  
}
}
