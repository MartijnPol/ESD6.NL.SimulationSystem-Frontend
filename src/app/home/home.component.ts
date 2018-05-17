import {Component, OnInit} from '@angular/core';
import {CarTracker} from '../../models/CarTracker';
import {CarTrackerService} from '../../services/car-tracker.service';
import {WebSocketSubject} from 'rxjs/observable/dom/WebSocketSubject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private webSocket: WebSocketSubject<string>;
  private carTrackers: CarTracker[] = [];

  constructor(private carTrackerService: CarTrackerService) {
    this.webSocket = WebSocketSubject.create('ws://localhost:3500');

    this.webSocket
      .subscribe(
        () => this.refreshCarTrackers(),
      );
  }

  refreshCarTrackers() {
    this.carTrackerService.getAll().subscribe(trackers => {
      this.carTrackers = trackers;
    });
  }

  /**
   * Initialize function to get all CarTrackers from the CarTracker-API
   */
  ngOnInit() {
    this.refreshCarTrackers();
  }

}