import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';

export interface UserData {
  hotelName: string,
  productname:string,
  id: string,
  Reviews_sp:string,
  orderdate:string,
  deliverydate:string,
  delivery_man:string,
  price:string,
  status:string,
}
@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements AfterViewInit    {

  closeResult: string;
  //table: any
  displayedColumns: string[] = [ 'hotelName' ,'productname', 'orderdate', 'Reviews_sp','price','status'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private modalService: NgbModal) {
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.table);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  videoBoxModal(videobox) {
    this.modalService.open(videobox, {backdropClass: 'light-blue-backdrop',centered: true,size: 'md'});
  }

  table = [
    {
      hotelName: 'Sam',
      productname:"Service 1",
      id: "#454545",
      orderdate:"12-05-2021/12:00",
      deliverydate:"12-05-2021/13:00",
      delivery_man:"John",
      Reviews_sp:"Experience with this client was Good",
      price:"50",
      status:"Completed",
    },
    {
      hotelName: 'Jhon',
      productname:"Service 2",
      id: "#454545",
      orderdate:"12-05-2021/11:00",
      deliverydate:"12-05-2021/14:00",
      delivery_man:"John",
      Reviews_sp:"Experience with this client was Bad",
      price:"50",
      status:"Cancelled",
    },
    {
      hotelName: 'Jason',
      productname:"Service 3",
      id: "#454545",
      orderdate:"12-05-2021/11:00",
      deliverydate:"12-05-2021/14:00",
      delivery_man:"John",
      Reviews_sp:"",
      price:"",
      status:"Pending",
    }
  ]
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }

