import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {  ToastrService } from 'ngx-toastr';

import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
submitted:boolean = false
totalUser: number;
InRange:boolean = false
pageSize: any= 10;
pageIndex :any= 1;
  packages: any;
  objId: any;
  id: any;
  currencyArray: any;
  
  
  constructor(private toastr:ToastrService,private modalService: NgbModal,private fb:FormBuilder,public service:ApiService,private toast:ToastrService) {
    this.service.getCurrency().subscribe((res:any)=>
    {
      console.log('Currency Res',res);
      
      this.currencyArray = res.currencyUnitArray
      
    })
  }
  userForm = this.fb.group({
    name: new FormControl("", Validators.compose([Validators.required,
    Validators.maxLength(15)])),
    saveUpto: new FormControl("",Validators.compose([Validators.required,
      Validators.maxLength(10)])),
      month: new FormControl("",Validators.compose([Validators.required])),
        price: this.fb.group({
          amount: new FormControl('', [Validators.required, Validators.maxLength(10)]),
          units:new FormControl ('', [Validators.required]),
        })
    })
  ngOnInit(): void {
    this.getPackages()
  }
  packageModal(item) {
    this.userForm.reset()
    this.submitted = false
    this.modalService.open(item, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  packagedelModal(item,id){
    this.id = id
    this.modalService.open(item, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  packageEditModal(itemedit,item) {
    this.objId = item._id
    this.submitted = false
    this.userForm.controls['name'].setValue(item.name)
    this.userForm.controls['saveUpto'].setValue(item.saveUpto)
    this.userForm.controls['price'].setValue(item.price)
    this.userForm.controls['month'].setValue(item.month)
    
    this.modalService.open(itemedit, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  SavePackage()
  {
    if(this.currencyArray.find((item)=>item.symbol===this.userForm.value.price.units)==undefined){
      this.units.reset()
      this.toast.error('Please select price unit from dropdown')
    }
   let obj = {
      "name" : this.userForm.value.name,
      "price" :this.userForm.value.price,
      "month" : this.userForm.value.month,
      "saveUpto" : this.userForm.value.saveUpto
  }
    this.submitted = true
    let url = `packages`
    if(this.userForm.valid){
      this.service.postApi(url,obj).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.getPackages()
        this.submitted = false
        this.toast.success(res.message)
        this.modalService.dismissAll()
        this.userForm.reset()
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
		 this.getPackages()
	  }
  get amount() {
    return this.userForm.get('price.amount');
  }
  get units() {
    return this.userForm.get('price.units');
  }
  getPackages() {
		let url = `packages?page=${this.pageIndex}&count=${this.pageSize}`
		this.service.getApi(url).subscribe((res:any) => {
			if (res.statusCode === 200) {
				this.packages = res.data.doc
				this.totalUser = res.data.itemCount
				console.log('Total pack',this.totalUser,res);
				
			} else {
				this.toastr.error(res["message"]);
				this.totalUser = 0
			}
		})
	}
  updatePackage()
  {
    if(this.currencyArray.find((item)=>item.symbol===this.userForm.value.price.units)==undefined){
      this.units.reset()
      this.toast.error('Please select price unit from dropdown')
    }
    console.log('Form',this.userForm.value.pric);
    let obj = {
      "name" : this.userForm.value.name,
      "price" :this.userForm.value.price,
      "month" : this.userForm.value.month,
      "saveUpto" : this.userForm.value.saveUpto
  }
    this.submitted = true
    let url = `packages/${this.objId}`
    if(this.userForm.valid){
      this.service.putApi(url,obj).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.getPackages()
        this.submitted = false
        this.toast.success('Package data updated successfully.')
        this.modalService.dismissAll()
      }else{
        this.toast.error(res.message)
      }
      })
    }
  }
  deletePackage(){
    let url = `packages/${this.id}`
    this.service.deleteApi(url).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.toastr.success(res.message)
        this.modalService.dismissAll()
        this.getPackages()
      }else{
        this.toastr.error(res.message)
      }
    })
  }
  addSubscriptionModal(addSubscription) {
    this.modalService.open(addSubscription, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
    // alert("Hello")
  }
  editSubscriptionModal(editSubscription) {
    this.modalService.open(editSubscription, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
    // alert("Hello")
  }
}
