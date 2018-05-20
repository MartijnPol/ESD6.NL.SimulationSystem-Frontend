import {Injectable} from '@angular/core';
import {Restangular} from 'ngx-restangular';

@Injectable()
export class CarTrackerService {

  /**
   * Constructor
   * @param {Restangular} restAngular
   */
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
  findById(id: string) {
    return this.restAngular.one('trackers', id).get();
  }

  /**
   * Function to delete a CarTracker by it's ID
   * @param {number} id is the id of the CarTracker
   */
  deleteById(id: string) {
    return this.restAngular.one('trackers', id).remove();
  }

  /**
   * Function to create a new CarTracker
   * @param {string} id is the id of the new CarTracker
   * @param {number} manufacturer is the manufacturer of the new CarTracker
   */
  create(id: string, manufacturer: number) {
    const newCarTracker = {id: id, manufacturer: manufacturer};
    return this.restAngular.all('trackers').post(newCarTracker);
  }

  /**
   * Function to start a route for a specific CarTracker
   * @param {string} id is the id of the CarTracker
   * @param {string} origin is the origin of the route
   * @param {string} destination is the destination of the route
   */
  startRoute(id: string, origin: string, destination: string) {
    return this.restAngular.one('trackers', id).customGET('start', {origin: origin, destination: destination});
  }


}
