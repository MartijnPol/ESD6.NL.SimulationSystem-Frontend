import {Component, Input, OnInit} from '@angular/core';
import {CarTracker} from '../../models/car-tracker';
import {NewCarTrackerDialogComponent} from '../new-car-tracker-dialog/new-car-tracker-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-car-trackers',
  templateUrl: './car-trackers.component.html',
  styleUrls: ['./car-trackers.component.css']
})
export class CarTrackersComponent {

  id: string;
  manufacturer: string;

  @Input() carTrackers: CarTracker[];

  constructor(public dialog: MatDialog) {

  }

  openNewCarTrackerDialog(): void {
    const dialogRef = this.dialog.open(NewCarTrackerDialogComponent, {
      data: {id: this.id, manufacturer: this.manufacturer}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
