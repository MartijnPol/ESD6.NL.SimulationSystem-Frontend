import {Component, OnInit} from '@angular/core';
import {CarTracker} from '../../models/CarTracker';
import {CarTrackerService} from '../../services/car-tracker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carTrackers: CarTracker[] = [];

  constructor(private carTrackerService: CarTrackerService) {
  }

  ngOnInit() {
    this.carTrackerService.getAll().subscribe(trackers => {
      this.carTrackers = trackers;
    });
  }

}
