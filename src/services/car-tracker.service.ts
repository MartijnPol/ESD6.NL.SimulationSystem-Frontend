import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {CarTracker} from "../models/CarTracker";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CarTrackerService {

  carTrackersCollection: AngularFirestoreCollection<CarTracker>;
  carTrackers: Observable<CarTracker[]>;

  /**
   * Constructor
   * @param {AngularFirestore} database
   */
  constructor(public database: AngularFirestore) {

    this.carTrackersCollection = this.database.collection('CarTrackers');

    this.carTrackers = this.carTrackersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as CarTracker;
        data.id = a.payload.doc.id;
        return data;
      });
    });

  }

  /**
   * Get all Routes stored in Firestore
   * @returns {Observable<Route[]>}
   */
  getAll() {
    return this.carTrackers;
  }


}
