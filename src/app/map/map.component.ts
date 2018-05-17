import {Component, Input, OnInit} from '@angular/core';
import {CarTracker} from '../../models/CarTracker';
import {Location} from '../../models/Location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() carTrackers: CarTracker[];
  centerLocation = new Location(52.132633, 5.291266);
  centerZoom = 7;
  markerIconUrl = 'https://png.icons8.com/metro/1600/car.png';

  constructor() { }

  ngOnInit() {
  }

}
