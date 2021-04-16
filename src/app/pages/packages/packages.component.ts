import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }
  packageModal(item) {
    this.modalService.open(item, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  packageEditModal(itemedit) {
    this.modalService.open(itemedit, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  
}
