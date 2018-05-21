import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EditprofileService } from "../editprofile/editprofile.service";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ApiserviceService } from "../../apiservice.service";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  reader: FileReader = new FileReader();
  file: any;
  image: String;
  base64Image: String;
  viwedccn = ''
  origccn = ''

  constructor(private masterService: ApiserviceService,
    private httpClient: HttpClient,
    public editprofile: EditprofileService,
    public snackBar: MatSnackBar,
    public router: Router) { }

  data: any = {};
  profile: any = [];
  images: any = {
    'cover': '',
    'logo': ''
  }

  ngOnInit() {
    this.profile = this.editprofile.profile;
    this.images.cover = this.masterService.apiRoot + '/' + this.profile.data.image;
    this.images.logo = this.masterService.apiRoot + '/' + this.profile.data.logo;
    var ccn = this.profile.data.ccn
    this.origccn = this.profile.data.ccn
    ccn = ccn.substr(ccn.length - 4)
    this.profile.data.ccn = "************" + ccn
    this.viwedccn = this.profile.data.ccn
    this.data = {

      "id": this.profile.data._id,
      "name": this.profile.data.name,
      "restaurant_type": this.profile.data.restaurant_type,
      //"image": this.profile.data.image,
      "gallery": [],
      //"logo": this.profile.data.logo,
      "address_1": this.profile.data.address_1,
      "address_2": this.profile.data.address_2,
      "city": this.profile.data.city,
      "state": this.profile.data.state,
      "country": this.profile.data.country,
      "pinCode": this.profile.data.pinCode,
      "countryCode": this.profile.data.countryCode,
      "phone": this.profile.data.phone,
      "email": this.profile.data.email,
      "description": this.profile.data.description,
      "monday": this.profile.data.monday,
      "tuesday": this.profile.data.tuesday,
      "wednesday": this.profile.data.wednesday,
      "thursday": this.profile.data.thursday,
      "friday": this.profile.data.friday,
      "saturday": this.profile.data.saturday,
      "sunday": this.profile.data.sunday,
      "info": this.profile.data.info,
      "website": this.profile.data.website,
      "ccn": this.profile.data.ccn,
      "expirydate": this.profile.data.expirydate,
      "cvv": this.profile.data.cvv,
      "wifiname": this.profile.data.wifiname,
      "latitude": this.profile.data.latitude,
      "longitude": this.profile.data.longitude
    };
  }

  imageUpload(element) {
    this.file = (<HTMLInputElement>document.getElementById('inputFileToLoad')).files[0];
    this.reader.readAsDataURL(this.file);
    this.reader.onloadend = (e) => {
      this.base64Image = this.reader.result;
      this.data.image = this.base64Image;
    };
    if (this.data.image.length <= 10 || this.data.image.length == undefined || this.data.image.length == null) {
      this.snackBar.open('Please upload other image', 'close', { duration: 2000 });
    } else {
      this.snackBar.open('Uploaded', 'close', { duration: 2000 });
      console.log(this.data.image);
    }
  }

  imageUpload2(element) {
    this.file = (<HTMLInputElement>document.getElementById('inputFileToLoad2')).files[0];
    this.reader.readAsDataURL(this.file);
    this.reader.onloadend = (e) => {
      this.base64Image = this.reader.result;
      this.data.logo = this.base64Image;
    };
    if (this.data.logo.length <= 10 || this.data.logo.length == undefined || this.data.logo.length == null) {
      this.snackBar.open('Please upload other image', 'close', { duration: 2000 });
    } else {
      this.snackBar.open('Uploaded', 'close', { duration: 2000 });
      console.log(this.data.logo);
    }
  }

  updateProfile() {
    if (this.data.ccn == this.viwedccn || this.data.ccn.indexOf('*') > -1) {
      this.data.ccn = this.origccn
    }

    if (this.data.name == "" || this.data.restaurant_type == "" || this.data.address_1 == "" ||
      this.data.address_2 == "" || this.data.city == "" || this.data.state == "" ||
      this.data.country == "" || this.data.email == "" ||
      this.data.countryCode == "" || this.data.phone == "" ||
      this.data.wifiname == "" || this.data.website == "" ||
      this.data.ccn == "" || this.data.cvv == "" ||
      this.data.expirydate == "" || this.data.description == "" ||
      this.data.info == "" || this.data.pinCode == "" ||
      this.data.latitude == "" || this.data.longitude == "") {
      this.snackBar.open('Please fill all the necessary fields', 'close', { duration: 10000 });
    }
    else {
      this.httpClient.post(this.masterService.apiRoot + '/guide/edit-profile', this.data)
        .subscribe(
          (data: any) => {
            console.log("Done");
            this.snackBar.open('Successful', 'close', { duration: 8000 });
            this.router.navigate(['/restaurants/profiles']);
          }, (err: any) => {
            console.log(err);
            this.snackBar.open('Unsuccessful', 'close', { duration: 8000 });
          });
    }
  }

  cancelProfile() {
    this.router.navigate(['/restaurants/profiles']);
  }
}
