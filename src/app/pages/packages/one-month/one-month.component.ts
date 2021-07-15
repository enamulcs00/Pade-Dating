import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-one-month',
  templateUrl: './one-month.component.html',
  styleUrls: ['./one-month.component.css']
})
export class OneMonthComponent implements OnInit {

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
}
