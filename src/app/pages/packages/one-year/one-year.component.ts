import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-one-year',
  templateUrl: './one-year.component.html',
  styleUrls: ['./one-year.component.css']
})
export class OneYearComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  addSubscriptionModal(addSubscription) {
    this.modalService.open(addSubscription, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
    // alert("Hello")
  }
  editSubscriptionModal(editSubscription) {
    this.modalService.open(editSubscription, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
    // alert("Hello")
  }
  delSubscriptionModal(delSubscription) {
    this.modalService.open(delSubscription, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  enableDisable(e,ref){
    if(ref=='unlimited'){
      console.log('Hii Unlimited',e.target.value);}
    else if(ref=='limited'){
      console.log('Hii limited',e.target.value);
    }
  }

}
