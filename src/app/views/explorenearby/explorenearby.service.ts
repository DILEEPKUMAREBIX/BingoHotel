import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from "../../apiservice.service";
import { MatSnackBar } from '@angular/material';

interface IApiLink {
  type: string,       // Possible values: GET/POST/DELETE
  url: string,        // Url Of the API
}

@Injectable()
export class ExplorenearbyService {

  constructor(private httpClient:HttpClient, private masterService: ApiserviceService, public snackBar: MatSnackBar) {}

  addExplore(data){
    console.log(data);
    this.httpClient.post(this.masterService.apiRoot+'/portal/add-nearby' , data)
    .subscribe(
      (data:any) => {
        console.log("Done");
        this.snackBar.open('Successful', 'close', { duration: 2000 });
      }, (err: any) => {
        console.log(err);
      });
  }

  explore:any = [];
  viewExplore() {
    this.httpClient.get(this.masterService.apiRoot+'/portal/get-nearby')
    .subscribe(
      (data:any) => {
        console.log("Done");
        this.explore = data;
        console.log(this.explore);
        return this.explore;
      }, (err: any) => {
        console.log(err);
      });
  }

  //tempData: any = {};
  // deleteExplore(id) {
  //   //this.tempData = {'id': id}
  //   this.httpClient.delete(this.masterService.apiRoot+'/portal/delete-nearby', id)
  //   .subscribe(
  //     (data:any) => {
  //       console.log("Done");
  //     }, (err: any) => {
  //       console.log(err);
  //   });
  // }

}
