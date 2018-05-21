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
export class UserslistService {

  constructor(private httpClient:HttpClient, private masterService: ApiserviceService, public snackBar: MatSnackBar) {}

  
}
