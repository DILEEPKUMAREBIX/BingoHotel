import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ApiserviceService } from "../../apiservice.service";
import 'rxjs/Rx' ;

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  // selectedValue: string = 'pizza';
  status = [
    { value: 'cleared', viewValue: 'Cleared' },
    { value: 'dues', viewValue: 'Dues' },
    // { value: 'tacos', viewValue: 'Tacos' }
  ];
  goods = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
    { value: '7', viewValue: '7' },
    { value: '8', viewValue: '8' },
    { value: '9', viewValue: '9' },
    { value: '10', viewValue: '10' },
    { value: '11', viewValue: '11' },
    { value: '12', viewValue: '12' },
    { value: '13', viewValue: '13' },
    { value: '14', viewValue: '14' },
    { value: '15', viewValue: '15' },
    { value: '16', viewValue: '16' },
    { value: '17', viewValue: '17' },
    { value: '18', viewValue: '18' },
    { value: '19', viewValue: '19' },
    { value: '20', viewValue: '20' },
    { value: '21', viewValue: '21' },
    { value: '22', viewValue: '22' },
    { value: '23', viewValue: '23' },
    { value: '24', viewValue: '24' },
    { value: '25', viewValue: '25' },
    { value: '26', viewValue: '26' },
    { value: '27', viewValue: '27' },
    { value: '28', viewValue: '28' },
    { value: '29', viewValue: '29' },
    { value: '30', viewValue: '30' },
    { value: '31', viewValue: '31' },
    // { value: 'tacos', viewValue: 'Tacos' }
  ];
  moods = [
    { value: 'jan', viewValue: 'Jan' },
    { value: 'feb', viewValue: 'Feb' },
    { value: 'mar', viewValue: 'Mar' },
    { value: 'apr', viewValue: 'Apr' },
    { value: 'may', viewValue: 'May' },
    { value: 'jun', viewValue: 'Jun' },
    { value: 'jul', viewValue: 'Jul' },
    { value: 'aug', viewValue: 'Aug' },
    { value: 'sep', viewValue: 'Sep' },
    { value: 'oct', viewValue: 'Oct' },
    { value: 'nov', viewValue: 'Nov' },
    { value: 'dec', viewValue: 'Dec' },
    // { value: 'tacos', viewValue: 'Tacos' }
  ];
  loods = [
    { value: '2017', viewValue: '2017' },
    { value: '2018', viewValue: '2018' },
    { value: '2019', viewValue: '2019' }
    // { value: 'tacos', viewValue: 'Tacos' }
  ];

  guideQuery: any = { };
  constructor(private masterService: ApiserviceService, private httpClient:HttpClient) { }

  ngOnInit() {
  }

  guideDues(status) {
    if(status == 'dues'){
      window.open(this.masterService.apiRoot+'/portal/guide-dues?to='+this.guideQuery.endDate+'&from='+this.guideQuery.startDate,'_blank');
    }
    // else if(status == 'cleared'){
    //   this.httpClient.put(this.masterService.apiRoot+'/portal/guide-clear-dues?to='+this.guideQuery.endDate+'&from='+this.guideQuery.startDate)
    //   .subscribe(
    //     (data:any) => {
    //       console.log("Done");
    //       console.log(data);
    //     }, (err: any) => {
    //       console.log(err);
    //   });
    // } else{
    //   console.log('Please select a status');
    // }
  }

}
