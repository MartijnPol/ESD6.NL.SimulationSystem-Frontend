import {Component, Input, OnInit} from '@angular/core';
import {CarTrackerService} from "../../services/car-tracker.service";
import {CarTracker} from "../../models/CarTracker";

@Component({
  selector: 'app-car-trackers',
  templateUrl: './car-trackers.component.html',
  styleUrls: ['./car-trackers.component.css']
})
export class CarTrackersComponent implements OnInit {

  @Input() carTrackers: CarTracker[];

  constructor(private carTrackerService: CarTrackerService) {
    this.carTrackerService.getAll().subscribe(trackers => {
      this.carTrackers = trackers;
    });
  }

  ngOnInit() {
  }

}
