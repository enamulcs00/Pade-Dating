import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  pricing: FormArray;
  FormMatrix:FormGroup
  IsFormEmpty:boolean = true
  submitted:boolean = false
  addedCredit:boolean = false
  packages: any;
  id: any;
  totalUser:number;
  pageSize: any= 10;
  pageIndex :any= 1;
  IsAnotherRowAdded:boolean = false
  constructor(private fb:FormBuilder,private toastr:ToastrService,private service:ApiService) { }

  ngOnInit(): void {
    this.getPackages()
  }
  createRow() {
    return this.fb.group({
      creditLimit: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
      creditRate:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
      _id:new FormControl(''),
    })
  }
  addRow(){
    this.pricing = this.FormMatrix.get('pricing') as FormArray;
    this.pricing.push(this.createRow());
  }
  removeGroup(index,a){
    console.log(a,'Remove arr itm id');
    if(a){
      this.DeleteCard(a)
    }else if(!a){
      this.pricing = this.FormMatrix.get('pricing') as FormArray;
      this.pricing.removeAt(index);
    }
  }
  AddSingleRow(creditRate,creditLimit){
    let url = `credits`
  this.submitted = true
    let obj = [{
      "creditLimit" : creditLimit,
      "creditRate" : creditRate
  }]
  if(this.FormMatrix.valid){
    this.service.postApi(url,obj).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.submitted = false
        this.getPackages()
        this.toastr.success(res.message,'', {
          timeOut: 700,})
      }else{
        this.toastr.error(res.message)
      }
})}}
  SavePackage()
  {
  this.FormMatrix.controls['pricing'].value.forEach(v => delete v._id)
    this.submitted = true
    let url = `credits`
    if(this.FormMatrix.valid){
      this.addedCredit = true
      this.service.postApi(url,this.FormMatrix.controls['pricing'].value).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.submitted = false
        this.getPackages()
        this.toastr.success(res.message,'', {
          timeOut: 700,})
      }else{
        this.toastr.error(res.message)
      }
      })
    }
  }
  toggleEdit(){
    this.addedCredit = false
  }
  getPackages() {
		let url = `credits?page=${this.pageIndex}&count=${this.pageSize}`
		this.service.getApi(url).subscribe((res:any) => {
			if (res.statusCode === 200) {
        console.log('Credit get',res);
        this.packages = res.data.doc
        this.totalUser = res.data.itemCount
        if(res.data.itemCount != 0){
          this.FormMatrix = this.fb.group({
            pricing: this.fb.array([])
          })
        }else if(res.data.itemCount ==0){
          this.FormMatrix = this.fb.group({
            pricing: this.fb.array([this.createRow()])
          })
        }
        if(res.data.doc.length>0){
          this.addedCredit = true
          this.IsFormEmpty = false
        }
        let control = <FormArray>this.FormMatrix.controls.pricing;
        for (let x of res.data.doc) {
          control.push(this.fb.group({
            creditLimit: x.creditLimit,
            creditRate: x.creditRate,
            _id:x._id
          }));
        }
			} else {
				this.toastr.error(res["message"]);
			}
		})
	}
  UpdatePackage(id,rate,limit)
{let obj = 
      {
        
        "creditLimit" : limit,
        "creditRate" : rate
    }
  this.submitted = true
    let url = `credits/${id}`
    if(this.FormMatrix.valid){
      this.addedCredit = true
      this.service.putApi(url,obj).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.submitted = false
        this.getPackages()
        this.toastr.success(res.message,'', {
          timeOut: 700,})
      }else{
        this.toastr.error(res.message)
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
  DeleteCard(id){
   let url = `credits/${id}`
     this.service.deleteApi(url).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.getPackages()
        this.submitted = false
        this.toastr.success(res.message,'', {
          timeOut: 700,})
      }else{
        this.toastr.error(res.message,'', {
          timeOut: 700,})
      }
      })
    
  }
}
