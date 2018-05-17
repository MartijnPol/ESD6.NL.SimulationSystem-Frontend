import {Injectable} from '@angular/core';
import {Restangular} from 'ngx-restangular';

@Injectable()
export class CarTrackerService {

  constructor(private restAngular: Restangular) {

  }

  /**
   * Get all CarTrackers stored in Firestore
   */
  getAll() {
    return this.restAngular.all('trackers').getList();
  }

  /**
   * Find a specific CarTracker by it's id
   * @param {number} id is the id of the CarTracker
   * @returns {any} the CarTracker, if found
   */
  findById(id: number) {
    return this.restAngular.one('trackers', id).get();
  }


}
