import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from "../../../apiservice.service";
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ViewprofileService } from "../../viewprofile/viewprofile.service";
import { EditprofileService } from "../../editprofile/editprofile.service";

import { MatPaginator, MatTableDataSource } from '@angular/material';

import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-users',
  templateUrl: './app-users.component.html',
  styleUrls: ['./app-users.component.css']
})
export class AppUsersComponent implements OnInit {

  guides: any = [];
  filteredGuides:any = [];
  displayedColumns = ['name', 'city', 'phone', 'email', 'actions'];
  dataSource = new MatTableDataSource<any>(this.guides);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private themeService: ThemeService,
    private masterService: ApiserviceService,
    private editprofile: EditprofileService,
    private viewprofile: ViewprofileService,
    private httpClient: HttpClient,
    public snackBar: MatSnackBar,
    public router: Router) {

    this.themeService.getMessage().subscribe(message => {
      message.text = message.text.trim(); // Remove whitespace
      message.text = message.text.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      //this.dataSource.filter = message.text;
      this.filterData(message.text);
    });

  }

  ngOnInit() {
    this.viewGuides();
  }

  filterData(value:string) {
    this.filteredGuides = this.guides.filter(res => 
      res.name.toLowerCase().indexOf(value.toLowerCase())>-1
      || res.city.toLowerCase().indexOf(value.toLowerCase())>-1
      || res.phone.toLowerCase().indexOf(value.toLowerCase())>-1
      || res.email.toLowerCase().indexOf(value.toLowerCase())>-1
      || res.countryCode.toLowerCase().indexOf(value.toLowerCase())>-1
    );
    this.dataSource = new MatTableDataSource<any>(this.filteredGuides);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  viewGuides() {
    this.httpClient.get(this.masterService.apiRoot + '/portal/guides')
      .subscribe(
        (data: any) => {
          console.log("Done");
          this.guides = data;
          console.log(this.guides);
          this.dataSource = new MatTableDataSource<any>(this.guides);
          this.dataSource.paginator = this.paginator;
          return this.guides;
        }, (err: any) => {
          console.log(err);
        });
  }

  deleteRestaurant(id) {
    this.httpClient.delete(this.masterService.apiRoot + '/guide/' + id)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.snackBar.open('Deleted', 'close', { duration: 2000 });
          this.viewGuides();
        }, (err: any) => {
          console.log(err);
          this.snackBar.open('Unsuccessful', 'close', { duration: 2000 });
        });
  }

  viewRestaurant(restaurantid) {
    this.viewprofile.viewProfile(restaurantid);
    // this.httpClient.get(this.masterService.apiRoot+'/portal/guide/'+restaurantid)
    // .subscribe(
    //   (data:any) => {
    //     console.log(data);
    //     this.router.navigate(['/viewprofile']);
    //   }, (err: any) => {
    //     console.log(err);
    //   });
  }

  editRestaurant(restaurantid) {
    this.editprofile.viewProfile(restaurantid);
    // this.httpClient.get(this.masterService.apiRoot+'/portal/guide/'+restaurantid)
    // .subscribe(
    //   (data:any) => {
    //     console.log(data);
    //     this.router.navigate(['/viewprofile']);
    //   }, (err: any) => {
    //     console.log(err);
    //   });
  }

}
