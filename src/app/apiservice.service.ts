import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

interface IApiLink {
  type: string,       // Possible values: GET/POST/DELETE
  url: string,        // Url Of the API
}


@Injectable()
export class ApiserviceService {

  constructor(private httpClient:HttpClient, public snackBar: MatSnackBar) {}

  apiRoot: String = 'http://178.62.101.168:3000'

}
