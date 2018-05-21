import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from "../../apiservice.service";
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AppInboxService {

  constructor(private masterService: ApiserviceService, private httpClient:HttpClient, public snackBar: MatSnackBar) { }

  replyEmail: String;
  queryResponse: any = {};

  reply(id){
    this.queryResponse.id = id;
    this.replyEmail = id;
    console.log("service "+this.queryResponse.id);
  }
  message(msg){
    //this.queryResponse.id = this.replyEmail;
    this.queryResponse.response = msg.message;

    this.httpClient.post(this.masterService.apiRoot+'/portal/reply-query' , this.queryResponse)
    .subscribe(
      (data:any) => {
        console.log("Done");
        this.snackBar.open('Successful', 'close', { duration: 2000 });
      }, (err: any) => {
        console.log(err);
      });
  }
}
