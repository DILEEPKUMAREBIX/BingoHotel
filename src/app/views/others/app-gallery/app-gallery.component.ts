import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from "../../../apiservice.service";
import { MatSnackBar } from '@angular/material';
import { NativeDateAdapter, DateAdapter } from "@angular/material";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DialogOverviewExampleDialog } from '../dialog-component/dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-gallery',
  templateUrl: './app-gallery.component.html',
  styleUrls: ['./app-gallery.component.css']
})
export class AppGalleryComponent implements OnInit {
  formData = {}
  console = console;
  basicForm: FormGroup;
  guide: any[] = [];

  reader: FileReader = new FileReader();
  file: any;
  image: String;
  base64Image: String;
  explore: any = [];


  data: any = {
    'image': String
  };

  data2: any = {
    'image': String
  };
  countryCtrl: FormControl;
  stateCtrl: FormControl;
  filteredCountries: Observable<any[]>;
  filteredStates: Observable<any[]>;
  countries: any = [];
  states: any = [];
  constructor(private httpClient: HttpClient,
    private apiservice: ApiserviceService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public router: Router) {

    this.getJSON().subscribe(data => {
      console.log(data)
      this.countries = data.countries;
    });
  }

  filterCountry(country: string) {
    return this.countries.filter(state =>
      state.country.toLowerCase().indexOf(country.toLowerCase()) === 0);
  }

  filterStates(text: string) {
    //console.log(this.states + state);
    var sts = this.states.filter(state =>
      state.toLowerCase().indexOf(text.toLowerCase()) === 0);
      console.log(sts);
      return sts;
  }

  initCC() {
    if (document.getElementById('iban') != undefined) {
      document.getElementById('iban').addEventListener('input', function (e) {
        var target:any =e.target;
        target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
      });
    }
  }

  ngOnInit() {
    let password = new FormControl('', Validators.required);
    let confirmPassword = new FormControl('', CustomValidators.equalTo(password));

    

    this.basicForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]),
      restaurant_type: new FormControl('', [
        Validators.required,
      ]),
      address_1: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(40)
      ]),
      address_2: new FormControl(''),
      city: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      country: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      pinCode: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(150)
      ]),
      info: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50)
      ]),
      website: new FormControl('', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(40)
      ]),
      ccn: new FormControl('', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(20)
      ]),
      expirydate: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(7)
      ]),

      month: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(7)
      ]),

      year: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(7)
      ]),

      cvv: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6)
      ]),
      wifiname: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ]),
      monday: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      tuesday: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      wednesday: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      thursday: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      friday: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      saturday: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      sunday: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      wifisecret: new FormControl('', [
        Validators.required
      ]),

      latitude: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]),
      longitude: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      countryCode: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(4)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ]),
      password: password,
      cpassword: confirmPassword
    })

    console.log();
    this.countryCtrl = <FormControl>this.basicForm.get("country");
    this.filteredCountries = this.countryCtrl.valueChanges
      .pipe(
        startWith(''),
        map(country => country ? this.filterCountry(country) : this.countries.slice())
      );
  }

  onCountryChange(country) {
    this.states = this.countries.find(x => x.country === country.option.value).states;
    this.stateCtrl = <FormControl>this.basicForm.get("state");
    this.basicForm.patchValue({
      state: ""
    });
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );

      
  }

  register: any = {};
  imageUpload(element) {
    this.file = (<HTMLInputElement>document.getElementById('inputFileToLoad')).files[0];
    this.reader.readAsDataURL(this.file);
    this.reader.onloadend = (e) => {
      this.base64Image = this.reader.result;
      this.data.image = this.base64Image;

      if (this.data.image.length <= 10 || this.data.image.length == undefined || this.data.image.length == null) {
        this.snackBar.open('Please upload other image', 'close', { duration: 10000 });
      } else {
        this.snackBar.open('Uploaded', 'close', { duration: 10000 });
        console.log(this.data.image);
      }
    };
    

  }

  imageUpload2(element) {
    this.file = (<HTMLInputElement>document.getElementById('inputFileToLoad2')).files[0];
    this.reader.readAsDataURL(this.file);
    this.reader.onloadend = (e) => {
      this.base64Image = this.reader.result;
      this.data2.image = this.base64Image;

      if (this.data2.image.length <= 10 || this.data2.image.length == undefined || this.data2.image.length == null) {
        this.snackBar.open('Please upload other image', 'close', { duration: 2000 });
      } else {
        this.snackBar.open('Uploaded', 'close', { duration: 2000 });
        console.log(this.data2.image);
      }
    };
    
  }

  registerGuide() {
    this.register = this.basicForm.getRawValue();
    console.log(this.register);
    this.register.gallery = [];
    this.register.image = this.data.image;
    this.register.logo = this.data2.image;
    this.register.ccn = this.register.ccn.split(" ").join("")

    if (this.register.ccn.length < 16) {
      this.snackBar.open('Please enter valid Credit card number', 'close', { duration: 10000 });
      return;
    }
    else if (this.register.month == "" || this.register.year == "") {
      this.snackBar.open('Please select expiry date', 'close', { duration: 10000 });
      return;
    }
    else if (this.register.cvv == "") {
      this.snackBar.open('Please enter valid cvv', 'close', { duration: 10000 });
      return;
    } else if (!this.basicForm.get("email").valid) {
      this.snackBar.open('Please enter valid email address', 'close', { duration: 10000 });
      return;
    } else if (this.register.name == "" || this.register.restaurant_type == "" || this.register.address_1 == "" ||
      this.register.city == "" || this.register.state == "" ||
      this.register.country == "" || this.register.pinCode == "" ||
      this.register.description == "" || this.register.info == "" ||
      this.register.cnn == "" ||
      this.register.cvv == "" || this.register.wifiname == "" ||
      this.register.wifisecret == "" || this.register.latitude == "" ||
      this.register.longitude == "" || this.register.email == "") {
      this.snackBar.open('Please fill all the necessary fields', 'close', { duration: 10000 });
    } else if (this.register['cpassword'] != this.register['password']) {
      this.snackBar.open('Password and Confirm Password Should be Same', 'close', { duration: 10000 });
    } else {
      delete this.register['cpassword']
      this.register.expirydate = this.register.month + "/" + this.register.year;
      delete this.register['month'];
      delete this.register['year'];
      this.httpClient.post(this.apiservice.apiRoot + '/guide/register', this.register)
        .subscribe((data: any) => {
          console.log("Done");
          this.snackBar.open('Successful', 'close', { duration: 10000 });
        }, (err: any) => {
          console.log(err);
          this.snackBar.open('Unsuccessful (' + err.error.message + ')', 'close', { duration: 10000 });
        });
    }
  }

  cancelGuide() {
    this.router.navigate(['/restaurants/profiles']);
  }

  openDialog(text: any, label: any): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: { name: label }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.from && result.to && result.from.length > 0 && result.to.length > 0)
        var value = result.from + " - " + result.to;
        var ctrl = <FormControl>this.basicForm.get(text.name);
        ctrl.patchValue(value);
    });
  }

  public getJSON(): Observable<any> {
    return this.httpClient.get("./assets/countryInfo.json")
  }

}