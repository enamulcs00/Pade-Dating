import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css']
})
export class LoyaltyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  btnChangeContent(){
  var content =  document.getElementById('editbtn');
  //  content.innerText == "Edit"  ? 'Save' : 'Edit';

  if(content.innerText == "Edit"){
    content.innerText = "Save";
  }
  else{
    content.innerText = "Edit";
  }
  }
}
