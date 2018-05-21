import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from "../../apiservice.service";
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserprofileService } from "../userprofile/userprofile.service";
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-usersblocked',
  templateUrl: './usersblocked.component.html',
  styleUrls: ['./usersblocked.component.css']
})
export class UsersblockedComponent implements OnInit {

  constructor(private themeService: ThemeService, 
              private masterService: ApiserviceService,
              private httpClient:HttpClient,
              public userprofile: UserprofileService,
              public snackBar: MatSnackBar,
              public router: Router) {
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

  usersData:any = [];
  users:any = [];
  filteredUsers:any = [];
  j:number = 0;
  displayedColumns = ['email', 'phone', 'address', 'actions'];
  dataSource = new MatTableDataSource<any>(this.users);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  viewUsers() {
    this.httpClient.get(this.masterService.apiRoot+'/portal/users')
    .subscribe(
      (data:any) => {
        console.log("Done");
        this.usersData = data;
        for(let i=0; i<this.usersData.length; i++)
        {
          //console.log(this.usersData[i].blocked);
          if(this.usersData[i].blocked == true)
          {
            this.users[this.j] = this.usersData[i];
            this.j++;
          }
        }
        //this.users = data;
        this.dataSource = new MatTableDataSource<any>(this.users);
        this.dataSource.paginator = this.paginator;
        console.log(this.users);
        return this.users;
      }, (err: any) => {
        console.log(err);
      });
  }

  unblockUser(id) {
    this.httpClient.post(this.masterService.apiRoot+'/user/unblock', {
      id:id
    })
    .subscribe(
      (data:any) => {
        console.log(data);
        this.snackBar.open('User Unblocked', 'close', { duration: 2000 });
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
