import { Component, OnInit } from '@angular/core';
import { TablesService } from './tables.service';

@Component({
  selector: 'app-georegion',
  templateUrl: './georegion.component.html',
  styleUrls: ['./georegion.component.css'],
  providers: [TablesService]
})
export class GeoregionComponent implements OnInit {


  rows = [];
columns = [];

  zoom = 6;
mapCenter = {
  lat: 23.806921,
  lng: 90.377078
}
polylinePoints = [
  { lat: 24.847916, lng: 89.369764 },
  { lat: 23.806921, lng: 90.377078 },
  { lat: 24.919298, lng: 91.831699 }
];
circleMapRadius = 50000;

  constructor(private service: TablesService) { }

  ngOnInit() {
    this.columns = this.service.getDataConf()
    this.rows = this.service.getAll()


  }
  circleMapRadiusChange(radius) {
  this.circleMapRadius = radius;
  // console.log(e)

}
}
