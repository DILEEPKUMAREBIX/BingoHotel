import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from "../../apiservice.service";
import { Router, ActivatedRoute, Params } from '@angular/router';


@Injectable()
export class EditprofileService {

  constructor(private httpClient:HttpClient, private masterService: ApiserviceService, public router: Router) { }

  profile:any = {};
  viewProfile(id) {
    this.httpClient.get(this.masterService.apiRoot+'/portal/guide/'+id)
    .subscribe(
      (data:any) => {
        console.log("Done");
        this.profile = data;
        console.log(this.profile);
        this.router.navigate(['/editprofile']);
        return this.profile;
      }, (err: any) => {
        console.log(err);
      });
  }

}
