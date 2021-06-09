import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  userForm: FormGroup;
submitted:boolean = false
  constructor(private modalService: NgbModal,private fb:FormBuilder,public service:ApiService,private toast:ToastrService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
			planName: new FormControl("", Validators.compose([Validators.required,
			Validators.maxLength(15)])),
			saveUpto: new FormControl("",Validators.compose([Validators.required,
			  Validators.maxLength(15)])),
        month: new FormControl("",Validators.compose([Validators.required,
          Validators.maxLength(12)])),
          price: this.fb.group({
            amount: new FormControl('', [Validators.required, Validators.maxLength(10)]),
            units:new FormControl ('', [Validators.required, Validators.maxLength(10)]),
          })
			})
  }
  packageModal(item) {
    this.modalService.open(item, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  packageEditModal(itemedit) {
    this.modalService.open(itemedit, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  SavePackage()
  {
    console.log('Form',this.userForm.value);
    
    this.submitted = true
    let url = `package`
    if(this.userForm.valid){
      this.service.postApi(url,this.userForm.value).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.submitted = false
        this.toast.success(res.message)
        this.modalService.dismissAll()
      }else{
        this.toast.error(res.message)
      }
      })
    }
  }
}
