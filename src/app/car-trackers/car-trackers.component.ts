import {Component, Input, OnInit} from '@angular/core';
import {CarTracker} from '../../models/car-tracker';
import {NewCarTrackerDialogComponent} from '../new-car-tracker-dialog/new-car-tracker-dialog.component';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {CarTrackerService} from '../../services/car-tracker.service';
import {RouteDialogComponent} from '../route-dialog/route-dialog.component';

@Component({
  selector: 'app-car-trackers',
  templateUrl: './car-trackers.component.html',
  styleUrls: ['./car-trackers.component.css']
})
export class CarTrackersComponent {

  @Input() carTrackers: CarTracker[];

  /**
   * Constructor
   * @param {MatDialog} dialog
   * @param {CarTrackerService} carTrackerService
   */
  constructor(public dialog: MatDialog, private carTrackerService: CarTrackerService) {
  }

  /**
   * Function to open the route dialog to start a new route for a specific CarTracker
   * @param id is the id of the CarTracker
   */
  openNewRouteDialog(id): void {
    const dialogRef = this.dialog.open(RouteDialogComponent, {
      data: {id: id, origin: null, destination: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        if (result.origin != null && result.destination != null) {
          this.carTrackerService.startRoute(result.id, result.origin, result.destination);
        }
      }
    });
  }

  /**
   * Function to open the confirm dialog to delete a specific CarTracker
   * @param id is the id of the CarTracker the user wants to remove
   */
  openConfirmDialog(id): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.carTrackerService.deleteById(result.id);
      }
    });
  }

  /**
   * Function to open the dialog for creating a new CarTracker
   */
  openNewCarTrackerDialog(): void {
    const dialogRef = this.dialog.open(NewCarTrackerDialogComponent, {
      data: {id: null, manufacturer: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        if (result.id != null && result.manufacturer != null) {
          this.carTrackerService.create(result.id, result.manufacturer);
        }
      }
    });
  }

}
