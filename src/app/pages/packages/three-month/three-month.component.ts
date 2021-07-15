import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-three-month',
  templateUrl: './three-month.component.html',
  styleUrls: ['./three-month.component.css']
})
export class ThreeMonthComponent implements OnInit {

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
