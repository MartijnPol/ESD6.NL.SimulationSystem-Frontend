import {Component, OnInit} from '@angular/core';
import {CarTracker} from '../../models/car-tracker';
import {CarTrackerService} from '../../services/car-tracker.service';
import {WebSocketSubject} from 'rxjs/observable/dom/WebSocketSubject';
import {MatDialog} from '@angular/material';

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
   * @param dialog
   */
  constructor(private carTrackerService: CarTrackerService, private dialog: MatDialog) {
    this.webSocket = WebSocketSubject.create('ws://192.168.25.122:1433');
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
