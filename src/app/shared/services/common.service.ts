import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
// import { ApiService } from "../api/api.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class CommonService {
  oderStatus: string = "pending";
  storeOderStatus: string = "pending";
  dropSetting = {
    singleSelection: false,
    idField: "_id",
    textField: "name",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  singleDropSetting = {
    enableCheckAll: false,
    singleSelection: true,
    idField: "_id",
    textField: "name",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  currencyOptions = [
    { code: "INR", symbol: "₹" },
    { code: "USD", symbol: "$" },
    { code: "Peso", symbol: "₱" }
  ]

  constructor(
    private spinner: NgxSpinnerService,
    private http: HttpClient,
  ) {
    this.getCountryCode();
  }


  getCountryCode() {
    return this.http
      .get<Response>("assets/json/countryCode.json")
      .pipe(map(response => response));
  }

  showSpinner() {
    this.spinner.show();
  }
  hideSpinner() {
    this.spinner.hide();
  }
}
