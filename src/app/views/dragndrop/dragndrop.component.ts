import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {
  photos = [{
    name: 'Photo 1',
    url: 'assets/images/a-trip-to-the-south-of-india-blog.jpg'
  }, {
    name: 'Photo 2',
    url: 'assets/images/dream-that-came-true-blog.jpg'
  }, {
    name: 'Photo 3',
    url: 'assets/images/wait-for-me-blog.jpg'
}];
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
  constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
      // console.log(`drag: ${value[0]}`);
      // console.log(value);
      // console.log(this.folders)
    });
  }

  ngOnInit() {
  }

}
