import { Component, OnInit } from '@angular/core';
import { TablesService } from './tables.service';

@Component({
  selector: 'app-usersegments',
  templateUrl: './usersegments.component.html',
  styleUrls: ['./usersegments.component.css'],
  providers: [TablesService]
})
export class UsersegmentsComponent implements OnInit {
  rows = [];
columns = [];
selectedSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ]
  selectedValue: string = 'delhi';
  foods = [
    { value: 'steak', viewValue: 'Steak' },
    { value: 'delhi', viewValue: 'Delhi' },
    { value: 'tacos', viewValue: 'Tacos' }]





  ;

  constructor(private service: TablesService) { }

  ngOnInit() {
    this.columns = this.service.getDataConf()
    this.rows = this.service.getAll()
  }

}
