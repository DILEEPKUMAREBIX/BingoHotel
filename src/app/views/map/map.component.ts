import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ApiserviceService } from "../../apiservice.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

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
  constructor(private masterService: ApiserviceService, private httpClient:HttpClient) { }

  ngOnInit() {
    this.getGuideList();
  }

  circleMapRadiusChange(radius) {
    this.circleMapRadius = radius;
    // console.log(e)
  }

  guideList: any = [];
  getGuideList() {
    this.httpClient.get(this.masterService.apiRoot+'/portal/guides')
    .subscribe(
      (data:any) => {
        console.log("Done");
        this.guideList = data;
        console.log(this.guideList);
      }, (err: any) => {
        console.log(err);
      });
  }
}
