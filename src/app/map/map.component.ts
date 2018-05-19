import {Component, Input, OnInit} from '@angular/core';
import {CarTracker} from '../../models/car-tracker';
import {Location} from '../../models/location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() carTrackers: CarTracker[];
  centerLocation = new Location(52.132633, 5.291266);
  centerZoom = 7;

  constructor() { }

  ngOnInit() {
  }

}
