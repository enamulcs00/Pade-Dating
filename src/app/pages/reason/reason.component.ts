import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/shared/services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css']
})
export class ReasonComponent implements OnInit {
closeResult: string;
AddCalled:boolean = false
totalUser: number;
pageSize: any= 10;
pageIndex :any= 1;
  id: any;
  Items: any;
  constructor(private FormBuilder:FormBuilder,private router:Router,private modalService: NgbModal,public service:ApiService ,private toastr:ToastrService) {
  }
  reasonForm = this.FormBuilder.group({
  reason : ['', [Validators.required,Validators.maxLength(100)]],
  })
  reviewModal(review) {
    this.modalService.open(review, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  ngOnInit(): void {
    this.getReason()
  }
  deletemodal(deletereason,id) {
    this.id = id.id
    
    this.modalService.open(deletereason, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  getReason(){
  let url = `reasons`
     this.service.getApi(url).subscribe((res:any)=>{
       console.log('Reason',res);
       if(res.statusCode==200){
         this.Items = res.data.value
         this.totalUser = res.data.length
       }else{
      this.toastr.error(res.message,'',{timeOut:600})
      console.log('Else called',res);
      this.totalUser = 0
   }})
  }
  Delete(){
    let url = `reason/${this.id}`
   this.service.deleteApi(url).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.toastr.success(res.message,'',{timeOut:600})
        this.modalService.dismissAll()
        this.getReason()
      }else{
  this.toastr.error(res.message,'',{timeOut:600})
  
  }})
  }
  Add(){
    this.AddCalled = true
let url = `reasons`
if(this.reasonForm.valid){
  this.service.postApi(url,this.reasonForm.value).subscribe((res:any)=>{
    console.log('Added',res);
    if(res.success==true){
      this.toastr.success(res.message)
      this.AddCalled = false
      this.modalService.dismissAll()
      this.getReason()
      this.reasonForm.reset()
    }else{
      this.toastr.error(res.message,'',{timeOut:600})
      }
  })
}
}
}
