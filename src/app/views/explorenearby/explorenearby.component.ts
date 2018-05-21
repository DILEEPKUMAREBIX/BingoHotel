import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ExplorenearbyService } from "./explorenearby.service";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ApiserviceService } from "../../apiservice.service";


@Component({
  selector: 'app-explorenearby',
  templateUrl: './explorenearby.component.html',
  styleUrls: ['./explorenearby.component.css']
})
export class ExplorenearbyComponent implements OnInit {

  formData = {}
  console = console;
  basicForm: FormGroup;

  data: any = {
    'image': String
  };

  constructor(private exploreservice: ExplorenearbyService,private masterService: ApiserviceService, private httpClient:HttpClient) {}

  reader: FileReader = new FileReader();
  file: any;
  image: String;
  base64Image: String;
  explore:any = [];

  ngOnInit() {
    // this.basicForm = new FormGroup({
    //   name: new FormControl(),
    //   description: new FormControl(),
    //   type: new FormControl(),
    //   latitude: new FormControl(),
    //   longitude: new FormControl()
    // })
    this.viewExplore();
  }

  addExplore(){
    this.exploreservice.addExplore(this.data);
  }

  imageUpload(element){

          this.file = (<HTMLInputElement>document.getElementById('inputFileToLoad')).files[0];
          this.reader.readAsDataURL(this.file);
          this.reader.onloadend = (e) => {
            this.base64Image = this.reader.result;
            this.data.image = this.base64Image};
            console.log(this.data.image);
  }

  viewExplore() {
    this.httpClient.get(this.masterService.apiRoot+'/portal/get-nearby')
    .subscribe(
      (data:any) => {
        console.log("Done");
        this.explore = data;
        //console.log(this.explore);
        for(let i=0; i< this.explore.length; i++){
          this.explore[i].image = this.masterService.apiRoot+this.explore[i].image;
        }
      }, (err: any) => {
        console.log(err);
      });
  }

  // updateLinks() {
  //   for(let i=0; i< this.explore.length; i++){
  //     this.explore[i].image = this.masterService.apiRoot+this.explore[i].image;
  //   }
  // }
  tempData: Object = {};
  deleteExplore(id) {
    this.tempData = {'id' : id};
    //this.exploreservice.deleteExplore(this.tempData);
    this.httpClient.delete(this.masterService.apiRoot+'/portal/delete-nearby', this.tempData)
    .subscribe(
      (data:any) => {
        console.log("Done");
      }, (err: any) => {
        console.log(err);
    });
  }
}
