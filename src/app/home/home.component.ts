import {Component, OnInit} from '@angular/core';
import {CarTracker} from '../../models/car-tracker';
import {CarTrackerService} from '../../services/car-tracker.service';
import {WebSocketSubject} from 'rxjs/observable/dom/WebSocketSubject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public carTrackers: CarTracker[] = [];
  private webSocket: WebSocketSubject<string>;

  /**
   * Constructor
   * @param {CarTrackerService} carTrackerService is the injectec CarTrackerService to get CarTrackers
   */
  constructor(private carTrackerService: CarTrackerService) {
    this.webSocket = WebSocketSubject.create('wss://simulationsystem-backend.herokuapp.com:3500');
    this.webSocket.subscribe(() => this.refreshCarTrackers());
  }

  /**
   * Function to refresh the CarTrackers
   */
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
