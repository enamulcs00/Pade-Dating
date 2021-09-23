import { Component, AfterViewInit } from "@angular/core";
import * as c3 from "c3";
import { ApiService } from "src/app/shared/services/api.service";
import { NgxSpinnerService } from "src/app/shared/services/spinner.service";
import { CommonService } from "src/app/shared/services/common.service";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-info-card",
  templateUrl: "./info-card.component.html",
})
export class InfocardComponent implements AfterViewInit {
  totalUsers: number = 0;
  newUsers: number = 0;
  totalMatches: number = 0;
  newMatches: number = 0;

  constructor(
    private api: ApiService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    public comm: CommonService
  ) {
    this.getDashboardData();
  }

  getDashboardData() {
    this.api.dashboard("weekly").subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.totalUsers = res?.data?.totaluser;
        this.newUsers = res?.data?.newUser;
        this.totalMatches = res?.data?.totalNewUserMatch;
        this.newMatches = res?.data?.newUserMatch;
      } else {
        this.toastr.error(res["message"]);
      }
    });
  }

  public lineChartData: Array<any> = [
    { data: [12, 19, 3, 5, 2, 3], label: "Balance $" },
  ];
  public lineChartLabels: Array<any> = [
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
  ];
  public lineChartOptions: any = {
    responsive: true,
    elements: {
      point: {
        radius: 2,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: "transparent",
      borderColor: "#4dc8ff",
      pointBackgroundColor: "#4dc8ff",
      pointBorderColor: "#4dc8ff",
      pointHoverBackgroundColor: "#4dc8ff",
      pointHoverBorderColor: "#4dc8ff",
    },
  ];
  public lineChartLegend = false;
  public lineChartType = "line";

  ngAfterViewInit() {
    // (<any>('#ravenue')).sparkline([6, 10, 9, 11, 9, 10, 12], {
    //     type: 'bar',
    //     height: '55',
    //     barWidth: '4',
    //     width: '100%',
    //     resize: true,
    //     barSpacing: '8',
    //     barColor: '#2961ff'
    // });

    const chart = c3.generate({
      bindto: "#foo",
      data: {
        columns: [["data", 91.4]],
        type: "gauge",
      },
      gauge: {
        label: {
          format: function (value, ratio) {
            return value;
          },
          show: false,
        },
        min: 0,
        max: 100,
        units: " %",
        width: 15,
      },
      legend: {
        hide: true,
      },
      size: {
        height: 80,
      },
      color: {
        pattern: ["#7e74fb"],
      },
    });
  }
}
