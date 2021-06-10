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
  submitted:boolean = false
  addedCredit:boolean = false
  packages: any;
  constructor(private fb:FormBuilder,private toastr:ToastrService,private service:ApiService) { }

  ngOnInit(): void {
    this.getPackages()
    this.FormMatrix = this.fb.group({
      pricing: this.fb.array([])
    })
  }
  createRow() {
    return this.fb.group({
      creditLimit: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
      creditRate:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    })
  }
  addRow(){
    this.pricing = this.FormMatrix.get('pricing') as FormArray;
    this.pricing.push(this.createRow());
  }
  removeGroup(index){
    this.pricing = this.FormMatrix.get('pricing') as FormArray;
   this.pricing.removeAt(index);
  }
  SavePackage()
  {
    this.addedCredit = true
    console.log('Form',this.FormMatrix.value);
    let obj = {
      
  }
    this.submitted = true
    let url = `credits`
    if(this.FormMatrix.valid){
      this.service.postApi(url,this.FormMatrix.controls['pricing'].value).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.submitted = false
        this.getPackages()
        this.toastr.success(res.message)
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
		let url = `credits`
		this.service.getApi(url).subscribe((res:any) => {
			if (res.statusCode === 200) {
        console.log('Credit get',res);
        this.packages = res.data.doc
        let control = <FormArray>this.FormMatrix.controls.pricing;
        for (let x of res.data.doc) {
          control.push(this.fb.group({
            creditLimit: x.creditLimit,
            creditRate: x.creditRate
          }));
        }
			} else {
				this.toastr.error(res["message"]);
			}
		})
	}
}
