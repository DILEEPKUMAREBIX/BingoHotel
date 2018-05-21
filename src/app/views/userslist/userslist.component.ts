import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { UserslistService } from "./userslist.service";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ApiserviceService } from "../../apiservice.service";

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

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

  users = [
    {
      "name": "Snow Benton",
      "membership": "Paid Member",
      "phone": "+1 (956) 486-2327",
      "photo": "assets/images/face-1.jpg",
      "address": "329 Dictum Court, Minnesota",
      "registered": "2016-07-09"
    },
    {
      "name": "Kay Sellers",
      "membership": "Paid Member",
      "phone": "+1 (929) 406-3172",
      "photo": "assets/images/face-2.jpg",
      "address": "893 Garden Place, American Samoa",
      "registered": "2017-02-16"
    },
    {
      "name": "Robert Middleton",
      "membership": "Paid Member",
      "phone": "+1 (995) 451-2205",
      "photo": "assets/images/face-3.jpg",
      "address": "301 Hazel Court, West Virginia",
      "registered": "2017-01-22"
    },
    {
      "name": "Delaney Randall",
      "membership": "Paid Member",
      "phone": "+1 (922) 599-2410",
      "photo": "assets/images/face-4.jpg",
      "address": "128 Kensington Walk, Ohio",
      "registered": "2016-12-08"
    },
    {
      "name": "Melendez Lawrence",
      "membership": "Paid Member",
      "phone": "+1 (824) 589-2029",
      "photo": "assets/images/face-5.jpg",
      "address": "370 Lincoln Avenue, Florida",
      "registered": "2015-03-29"
    },
    {
      "name": "Galloway Fitzpatrick",
      "membership": "Paid Member",
      "phone": "+1 (907) 477-2375",
      "photo": "assets/images/face-6.jpg",
      "address": "296 Stuyvesant Avenue, Iowa",
      "registered": "2015-12-12"
    },
    {
      "name": "Watson Joyce",
      "membership": "Paid Member",
      "phone": "+1 (982) 500-3137",
      "photo": "assets/images/face-7.jpg",
      "address": "224 Visitation Place, Illinois",
      "registered": "2015-08-19"
    },
    {
      "name": "Ada Kidd",
      "membership": "Paid Member",
      "phone": "+1 (832) 531-2385",
      "photo": "assets/images/face-1.jpg",
      "address": "230 Oxford Street, South Dakota",
      "registered": "2016-08-11"
    },
    {
      "name": "Raquel Mcintyre",
      "membership": "Paid Member",
      "phone": "+1 (996) 443-2102",
      "photo": "assets/images/face-2.jpg",
      "address": "393 Sullivan Street, Palau",
      "registered": "2014-09-03"
    },
    {
      "name": "Juliette Hunter",
      "membership": "Paid Member",
      "phone": "+1 (876) 568-2964",
      "photo": "assets/images/face-3.jpg",
      "address": "191 Stryker Court, New Jersey",
      "registered": "2017-01-18"
    },
    {
      "name": "Workman Floyd",
      "membership": "Paid Member",
      "phone": "+1 (996) 481-2712",
      "photo": "assets/images/face-4.jpg",
      "address": "350 Imlay Street, Utah",
      "registered": "2017-05-01"
    },
    {
      "name": "Amanda Bean",
      "membership": "Paid Member",
      "phone": "+1 (894) 512-3907",
      "photo": "assets/images/face-5.jpg",
      "address": "254 Stockton Street, Vermont",
      "registered": "2014-08-30"
    }
  ]

  zoom = 6;
  mapCenter = {
    lat: 23.806921,
    lng: 90.377078
  }
  polylinePoints = [
    { lat: 24.847916, lng: 89.369764 },
    { lat: 23.806921, lng: 90.377078 },
    { lat: 24.919298, lng: 91.831699 }
  ];
  circleMapRadius = 50000;

  constructor(private userslistservice: UserslistService,private masterService: ApiserviceService, private httpClient:HttpClient) {}

  ngOnInit() {
    this.userList();
  }

  usersList: any = [];
  userList() {
    //this.exploreservice.deleteExplore(this.tempData);
    this.httpClient.get(this.masterService.apiRoot+'/portal/users')
    .subscribe(
      (data:any) => {
        this.usersList = data;
        console.log(this.usersList);
      }, (err: any) => {
        console.log(err);
    });
  }


}
