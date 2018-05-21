import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from "../../apiservice.service";
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserprofileService } from "../userprofile/userprofile.service";

import { MatPaginator, MatTableDataSource } from '@angular/material';

import { ThemeService } from '../../services/theme/theme.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersData: any = [];
  users: any = [];
  filteredUsers:any = [];
  j: number = 0;
  displayedColumns = ['email', 'phone', 'address', 'actions'];
  dataSource = new MatTableDataSource<any>(this.users);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private themeService: ThemeService, private masterService: ApiserviceService, private httpClient: HttpClient, public userprofile: UserprofileService, public snackBar: MatSnackBar, public router: Router) {
    this.themeService.getMessage().subscribe(message => {
      message.text = message.text.trim(); // Remove whitespace
      message.text = message.text.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      //this.dataSource.filter = message.text;
      this.filterData(message.text);
    });
  }

  filterData(value:string) {
    this.filteredUsers = this.users.filter(res => 
      res.name.toLowerCase().indexOf(value.toLowerCase())>-1
      || res.phone.toLowerCase().indexOf(value.toLowerCase())>-1
      || res.email.toLowerCase().indexOf(value.toLowerCase())>-1
      || res.countryCode.toLowerCase().indexOf(value.toLowerCase())>-1
    );
    this.dataSource = new MatTableDataSource<any>(this.filteredUsers);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.viewUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  viewUsers() {
    this.httpClient.get(this.masterService.apiRoot + '/portal/users')
      .subscribe(
        (data: any) => {
          console.log("Done");
          this.usersData = data;
          for (let i = 0; i < this.usersData.length; i++) {
            //console.log(this.usersData[i].blocked);
            if (this.usersData[i].blocked == false) {
              this.users[this.j] = this.usersData[i];
              this.j++;
            }
          }
          //this.users = data;
          console.log(this.users);
          this.dataSource = new MatTableDataSource<any>(this.users);
          this.dataSource.paginator = this.paginator;
          return this.users;
        }, (err: any) => {
          console.log(err);
        });
  }

  blockUser(id) {
    this.httpClient.post(this.masterService.apiRoot + '/user/block', {
      id: id
    })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.snackBar.open('User Blocked', 'close', { duration: 2000 });
        }, (err: any) => {
          console.log(err);
          this.snackBar.open('Unsuccessful', 'close', { duration: 2000 });
        });
  }

  viewUser(id) {
    this.userprofile.viewProfile(id);
    // this.httpClient.get(this.masterService.apiRoot+'/portal/user/'+id)
    // .subscribe(
    //   (data:any) => {
    //     console.log(data);
    //     this.router.navigate(['/userprofile']);
    //   }, (err: any) => {
    //     console.log(err);
    //   });
  }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];