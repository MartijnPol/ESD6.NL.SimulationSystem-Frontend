import {Component, Input, OnInit} from '@angular/core';
import {CarTracker} from '../../models/car-tracker';

@Component({
  selector: 'app-car-trackers',
  templateUrl: './car-trackers.component.html',
  styleUrls: ['./car-trackers.component.css']
})
export class CarTrackersComponent implements OnInit {

  @Input() carTrackers: CarTracker[];

  constructor() {

  }

  ngOnInit() {
  }

}
