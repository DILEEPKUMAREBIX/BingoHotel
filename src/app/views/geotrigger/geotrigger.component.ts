import { Component, OnInit } from '@angular/core';
import { TablesService } from './tables.service';

@Component({
  selector: 'app-geotrigger',
  templateUrl: './geotrigger.component.html',
  styleUrls: ['./geotrigger.component.css'],
  providers: [TablesService]
})
export class GeotriggerComponent implements OnInit {
  rows = [];
columns = [];

  selectedValue: string = 'delhi';
  foods = [
    { value: 'steak', viewValue: 'Steak' },
    { value: 'delhi', viewValue: 'Delhi' },
    { value: 'tacos', viewValue: 'Tacos' }]

  constructor(private service: TablesService) { }

  ngOnInit() {
    this.columns = this.service.getDataConf()
    this.rows = this.service.getAll()
  }

}
